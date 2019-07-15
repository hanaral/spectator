/*
* Copyright (c) 2019 Marvin Ahlgrimm (https://github.com/treagod)
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* General Public License for more details.
*
* You should have received a copy of the GNU General Public
* License along with this program; if not, write to the
* Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
* Boston, MA 02110-1301 USA
*
* Authored by: Marvin Ahlgrimm <marv.ahlgrimm@gmail.com>
*/

namespace Spectator.Widgets.Sidebar.History {
    public class DateBox : Gtk.Box {
        private Gtk.Box items;
        construct {
            orientation = Gtk.Orientation.VERTICAL;
            margin = 3;
        }

        public DateBox (string date_string) {
            items = new Gtk.Box (Gtk.Orientation.VERTICAL, 5);
            var date_label = new Gtk.Label ("<b>%s</b>".printf (date_string));
            date_label.justify = Gtk.Justification.CENTER;
            date_label.use_markup = true;

            pack_start (date_label);
            pack_start (items);
            items.show_all ();
        }

        public void add_item (Item item) {
            items.add (item);
        }

        public Item? get_item (Models.Request request) {
            Item? result = null;

            items.foreach ((it) => {
                var item = (Item) it;

                if (item.item == request) {
                    result = item;
                    return;
                }
            });
            return result;
        }
    }

    public class Container : Gtk.FlowBox {
        public signal void item_deleted (Models.Request item);
        public signal void item_edited (Models.Request item);
        public signal void item_clicked (Item item);

        private Gee.HashMap<string, DateBox> boxes;
        private Item? active_item;

        construct {
            activate_on_single_click = true;
            valign = Gtk.Align.START;
            min_children_per_line = 1;
            max_children_per_line = 1;
            selection_mode = Gtk.SelectionMode.SINGLE;
            margin = 6;
            expand = false;
        }

        public Container () {
            boxes = new Gee.HashMap<string, DateBox> ();
            get_style_context ().add_class ("history-box");
            Settings.get_instance ().theme_changed.connect (() => {
                forall ((widget) => {
                    var it = (Sidebar.Item) widget;
                    it.refresh ();
                });
            });
        }

        public void update_active_url () {
            if (active_item != null) {
                active_item.update_url ();
            }
        }

        public void change_active (Models.Request request) {
            if (active_item != null) {
                active_item.get_style_context ().remove_class ("active");
                active_item = null;
            }

            foreach (var entry in boxes.entries) {
                var date_box = entry.value;
                var item = date_box.get_item (request);

                if (item != null) {
                    active_item = item;
                    active_item.get_style_context ().add_class ("active");
                    return;
                }
            }
        }

        private void add_history_item (string key_date, Models.Request request) {
            var item = new Item (request);

            item.item_clicked.connect (() => {
                if (active_item != null) {
                    active_item.get_style_context ().remove_class ("active");
                }
                active_item = item;
                active_item.get_style_context ().add_class ("active");
                item_clicked (item);
            });

            if (boxes.has_key (key_date)) {
                var date_box = boxes[key_date];
                date_box.add_item (item);
                date_box.show_all ();
            } else {
                var date_box = new DateBox (key_date);
                date_box.add_item (item);
                boxes[key_date] = date_box;
                add (date_box);
                date_box.show_all ();
            }
        }

        public void add_request (Models.Request request) {
            var now = new DateTime.now_local ();
            var difference = now.difference (request.last_sent);

            if (difference < 1 * TimeSpan.DAY) {
                add_history_item ("Today", request);
            } else if (difference >= 1 * TimeSpan.DAY && difference < 2 * TimeSpan.DAY) {
                add_history_item ("Yesterday", request);
            } else {
                add_history_item (request.last_sent.format ("%e. %B %Y"), request);
            }
        }

        public void clear () {
            @foreach((widget) => {
                remove (widget);
            });
            boxes.clear ();
        }

        public void update (Gee.HashMap<Models.Request, DateTime> requests_history) {
            var now = new DateTime.now_local ();
            @foreach((widget) => {
                remove (widget);
            });

            foreach (var entry in requests_history.entries) {
                var difference = now.difference (entry.value);

                if (difference < 1 * TimeSpan.DAY) {
                    add_history_item ("Today", entry.key);
                } else if (difference == 1 * TimeSpan.DAY) {
                    add_history_item ("Yesterday", entry.key);
                } else {
                    add_history_item (entry.value.format ("%e. %B %Y"), entry.key);
                }
            }
        }
    }
}