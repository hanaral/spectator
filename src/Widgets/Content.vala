/*
* Copyright (c) 2020 Marvin Ahlgrimm (https://github.com/treagod)
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

namespace Spectator.Widgets {
    public class Content : Gtk.Box {
        private Gtk.Stack stack;
        private Granite.Widgets.Welcome welcome;
        private RequestResponsePane req_res_pane;
        private Gtk.InfoBar infobar;
        private Gtk.Label infolabel;
        private Spectator.Window window;

        public signal void url_changed (string url);
        public signal void method_changed (Models.Method method);
        public async signal void request_activated ();
        public signal void cancel_process ();
        public signal void type_changed (RequestBody.ContentType type);
        public signal void body_buffer_changed (string content);
        public signal void script_changed (string script);

        public signal void item_changed (Models.Request item);
        public signal void welcome_activated (int index);
        public signal void header_added (Pair header);
        public signal void header_deleted (Pair header);
        public signal void url_params_updated (Gee.ArrayList<Pair> items);
        public signal void key_value_added (Pair item);
        public signal void key_value_removed (Pair item);
        public signal void key_value_updated (Pair item);

        private void create_activated_welcome_dialog (int i) {
            switch (i) {
                case 0:
                this.window.create_request_dialog ();
                break;
                case 1:
                this.window.create_collection_dialog ();
                break;
                default:
                assert_not_reached ();
            }
        }

        public void display_request (uint id) {
            this.req_res_pane.display_request (id);
            this.stack.set_visible_child (this.req_res_pane);
        }

        public Content (Spectator.Window window) {
            this.stack = new Gtk.Stack ();
            this.infobar = new Gtk.InfoBar ();
            this.infolabel = new Gtk.Label ("");
            this.window = window;
            this.welcome = new Granite.Widgets.Welcome (_(Constants.RELEASE_NAME),
                                                   _("Inspect your HTTP transmissions to the web"));
            welcome.hexpand = true;
            welcome.append ("bookmark-new", _("Create Request"), _("Create a new request to the web."));
            welcome.append ("folder-new", _("Create Collection"),
                            _("Create a new collection to arrange your requests."));

            welcome.activated.connect ((index) => {
                create_activated_welcome_dialog (index);
            });

            req_res_pane = new RequestResponsePane (this.window);

            req_res_pane.type_changed.connect ((type) => {
                type_changed (type);
            });

            req_res_pane.body_buffer_changed.connect ((content) => {
                body_buffer_changed (content);
            });

            req_res_pane.script_changed.connect ((script) => {
                script_changed (script);
            });

            req_res_pane.key_value_added.connect ((item) => {
                key_value_added (item);
            });

            req_res_pane.key_value_updated.connect ((item) => {
                key_value_updated (item);
            });

            req_res_pane.key_value_removed.connect ((item) => {
                key_value_removed (item);
            });

            req_res_pane.cancel_process.connect (() => {
                cancel_process ();
            });

            setup_request_signals (req_res_pane);

            stack.add_named (welcome, "welcome");
            stack.add_named (req_res_pane, "req_res_pane");

            stack.set_visible_child (welcome);
            infobar.show_close_button = true;
            infobar.revealed = false;

            infobar.response.connect (() => {
                infobar.revealed = false;
            });

            Gtk.Container content = infobar.get_content_area ();
            content.add (infolabel);
            content.show_all ();

            add (infobar);
            add (stack);

            show_all ();
        }

        construct {
            orientation = Gtk.Orientation.VERTICAL;
            margin = 0;
        }

        public void set_warning (string message) {
            infobar.message_type = Gtk.MessageType.WARNING;

            reveal_infobar (message);
        }

        public void set_error (string message) {
            infobar.message_type = Gtk.MessageType.ERROR;

            reveal_infobar (message);
        }

        private void reveal_infobar (string message) {
            infolabel.label = message;
            infobar.revealed = true;
        }

        public void update_response (Models.Request request) {
            req_res_pane.update_response (request);
            if (infobar.revealed) {
                reset_infobar ();
            }
        }

        public void reset_infobar () {
            infolabel.label = "";
            infobar.revealed = false;
        }

        public void update_chunk_response (Models.Request request) {
            req_res_pane.update_chunk_response (request);
            if (infobar.revealed) {
                reset_infobar ();
            }
        }

        public void update_status (Models.Request request) {
            req_res_pane.update_status (request);
        }

        public void update_url_params (Models.Request item) {
            req_res_pane.update_url_params (item);
        }

        public Services.ScriptWriter get_console_writer () {
            return req_res_pane.get_console_writer ();
        }

        private void setup_request_signals (RequestResponsePane request) {
            request.url_changed.connect ((url) => {
                // this.window.change_url (url);
            });

            request.request_activated.connect (() => {
                request_activated ();
            });

            request.method_changed.connect ((method) => {
                method_changed (method);
            });

            request.header_added.connect ((header) => {
                header_added (header);
            });

            request.header_deleted.connect ((header) => {
                header_deleted (header);
            });

            request.url_params_updated.connect ((items) => {
                url_params_updated (items);
            });
        }

        public void show_welcome () {
            stack.set_visible_child (welcome);
        }
    }

}
