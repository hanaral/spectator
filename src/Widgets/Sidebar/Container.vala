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

namespace Spectator.Widgets.Sidebar {
    public class TitleBar : Gtk.Box {
        private Gtk.Label title;
        public string title_text {
            get {
                return title.label;
            }
            set {
                title.label = value;
            }
        }

        public TitleBar (string text) {
            orientation = Gtk.Orientation.VERTICAL;

            title = new Gtk.Label (text);
            title.get_style_context ().add_class ("h2");
            title.halign = Gtk.Align.CENTER;
            title.margin = 5;

            var separator = new Gtk.Separator (Gtk.Orientation.HORIZONTAL);
            separator.margin_top = 2;

            pack_start (title, true, true, 0);
            pack_start (separator, true, true, 0);
        }
    }

    public class Container : Gtk.Box {
        private Gtk.ScrolledWindow collection_scroll;
        private Gtk.ScrolledWindow history_scroll;
        private string collection_title_text = _("Collections");
        private string history_title_text = _("History");
        private Gtk.Stack stack;
        public Collection.Container collection;
        public History.Container history;
        private TitleBar titlebar;
        private Spectator.Window window;
        private Granite.Widgets.ModeButton mode_buttons;

        public signal void selection_changed (Models.Request item); /* Deprecated */
        public signal void request_item_selected (uint id);
        public signal void request_edit_clicked (uint id);
        public signal void request_delete_clicked (uint id);
        public signal void notify_delete ();
        public signal void create_collection_request (uint id);
        public signal void collection_edit (Models.Collection collection);
        public signal void collection_delete (Models.Collection collection);

        public Container (Spectator.Window window) {
            this.window = window;
            history_scroll = new Gtk.ScrolledWindow (null, null);
            history_scroll.hscrollbar_policy = Gtk.PolicyType.AUTOMATIC;
            history_scroll.vscrollbar_policy = Gtk.PolicyType.AUTOMATIC;


            collection_scroll = new Gtk.ScrolledWindow (null, null);
            collection_scroll.hscrollbar_policy = Gtk.PolicyType.AUTOMATIC;
            collection_scroll.vscrollbar_policy = Gtk.PolicyType.AUTOMATIC;

            titlebar = new TitleBar (collection_title_text);

            orientation = Gtk.Orientation.VERTICAL;
            width_request = 265;

            collection = new Collection.Container (window);
            history = new History.Container (window);

            collection_scroll.add (collection);
            history_scroll.add (history);

            collection.create_collection_request.connect ((collection_id) => {
                create_collection_request (collection_id);
            });

            collection.collection_edit.connect ((collection) => {
                collection_edit (collection);
            });

            collection.collection_delete.connect ((collection) => {
                collection_delete (collection);
            });

            collection.request_item_selected.connect ((id) => {
                this.request_item_selected (id);
                this.history.select_request (id);
            });

            collection.request_edit_clicked.connect ((id) => {
                this.request_edit_clicked (id);
            });

            collection.request_delete_clicked.connect ((id) => {
                this.request_delete_clicked (id);
            });

            history.request_item_selected.connect ((id) => {
                this.request_item_selected (id);
                this.collection.select_request (id);
            });

            history.request_edit_clicked.connect ((id) => {
                this.request_edit_clicked (id);
            });

            history.request_delete_clicked.connect ((id) => {
                this.request_delete_clicked (id);
            });

            stack = new Gtk.Stack ();
            stack.add_named (collection_scroll, "groups");
            stack.add_named (history_scroll, "history");

            stack.set_visible_child (collection_scroll);

            mode_buttons = create_mode_buttons ();

            mode_buttons.mode_changed.connect (() => {
                if (mode_buttons.selected == 0) {
                    stack.set_visible_child (collection_scroll);
                    titlebar.title_text = collection_title_text;
                } else {
                    stack.set_visible_child (history_scroll);
                    titlebar.title_text = history_title_text;
                }
            });

            mode_buttons.get_style_context ().add_class ("square");

            pack_start (titlebar, false, true, 0);
            pack_start (stack, true, true, 0);
            pack_end (mode_buttons, false, true, 0);
        }

        public void show_history () {
            mode_buttons.selected = 1;
            stack.set_visible_child (history_scroll);
            titlebar.title_text = history_title_text;
        }

        public void show_collection () {
            mode_buttons.selected = 0;
            stack.set_visible_child (collection_scroll);
            titlebar.title_text = collection_title_text;
        }

        public void add_collection (Models.Collection model) {
            collection.add_collection (model);
        }

        public void select_request (uint id) {
            collection.select_request (id);
        }

        public void show_items () {
            this.show_collection_items ();
            this.show_history_items ();
        }

        public void show_collection_items () {
            this.collection.show_items ();
        }

        public void show_history_items () {
            this.history.show_items ();
        }

        private Granite.Widgets.ModeButton create_mode_buttons () {
            var mode = new Granite.Widgets.ModeButton ();
            mode.append_icon ("view-list-symbolic", Gtk.IconSize.SMALL_TOOLBAR);
            mode.append_icon ("document-open-recent-symbolic", Gtk.IconSize.SMALL_TOOLBAR);
            mode.set_active (0);

            return mode;
        }

        public void update_active_method (Models.Method method) {
            collection.update_active_method (method);
            //history.update_active_url ();
        }

        public void update_active_url (string url) {
            collection.update_active_url (url);
            //history.update_active_url ();
        }
    }
}
