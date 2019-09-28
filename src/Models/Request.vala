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

namespace Spectator.Models {
    private uint max_id = 0;
    public class Request : Object {
        public uint id { get; private set; }
        public uint? collection_id;
        public string name { get; set; }
        public RequestBody request_body { get; private set; }
        public Method method { get; set; }
        public RequestStatus status { get; set; }
        public ResponseItem? response { get; set; }
        public string script_code;
        public Gee.ArrayList<Pair> headers { get; private set; }
        public DateTime? last_sent;
        public string query {
            owned get {
                var idx = uri.index_of_char ('?');

                if (idx < 0) {
                    return "";
                }

                return uri.substring (idx + 1);
            } public set {
                var idx = uri.index_of_char ('?');

                // If a '?' exists in the URI, cut it with the tail of and
                // replace it with the new query
                if (idx < 0) {
                    uri = "%s?%s".printf (uri, value);
                } else {
                    var tmp = uri.substring (0, idx);
                    uri = "%s?%s".printf (tmp, value);
                }
            }
        }

        public string uri;

        public Request (string nam, Method meth) {
            setup (nam, meth);
            id = max_id++;
        }

        public Request.with_id (string nam, Method meth, uint i) {
            setup (nam, meth);
        }

        public Request.duplicate (Request old_req) {
            setup (old_req.name, old_req.method);
            uri = old_req.uri;
            request_body = old_req.request_body;
            script_code = old_req.script_code;
            foreach (var header in old_req.headers) {
                add_header (header);
            }
        }

        public Request.clone (Request old_req) {
            setup (old_req.name, old_req.method);
            collection_id = old_req.collection_id;
            uri = old_req.uri;
            request_body = old_req.request_body;
            script_code = old_req.script_code;
            foreach (var header in old_req.headers) {
                add_header (header);
            }

            id = max_id++;
        }

        public Request.with_uri (string nam, string url, Method meth) {
            setup (nam, meth);
            uri = url;
            id = max_id++;
        }
        public Request.with_uri_and_id (uint i, string nam, string url, Method meth) {
            setup (nam, meth);
            uri = url;
            if (i >= max_id) {
                max_id = i;
                id = max_id++;
            } else {
                id = i;
            }
        }

        private void setup (string nam, Method meth) {
            headers = new Gee.ArrayList<Pair> ();
            script_code = "";
            name = nam;
            uri = "";
            method = meth;
            status = RequestStatus.NOT_SENT;
            request_body = new RequestBody ();
        }

        public bool has_valid_uri () {
            var tmp = new Soup.URI (uri);
            return tmp != null;
        }

        public void add_header (Pair header) {
            headers.add (header);
        }

        public void remove_header (Pair header) {
            headers.remove (header);
        }
    }

    public enum RequestStatus {
        NOT_SENT, SENT, SENDING
    }

    public enum Method {
        GET, POST, PUT, PATCH, DELETE, HEAD;

        public static Method convert (int i) {
            switch (i) {
                case 0:
                    return GET;
                case 1:
                    return POST;
                case 2:
                    return PUT;
                case 3:
                    return PATCH;
                case 4:
                    return DELETE;
                case 5:
                    return HEAD;
                default:
                    assert_not_reached ();
            }
        }

        public int to_i () {
            switch (this) {
                case GET:
                    return 0;
                case POST:
                    return 1;
                case PUT:
                    return 2;
                case PATCH:
                    return 3;
                case DELETE:
                    return 4;
                case HEAD:
                    return 5;
                default:
                    assert_not_reached ();
            }
        }

        public string to_str () {
            switch (this) {
                case GET:
                    return "GET";
                case POST:
                    return "POST";
                case PUT:
                    return "PUT";
                case PATCH:
                    return "PATCH";
                case DELETE:
                    return "DELETE";
                case HEAD:
                    return "HEAD";
                default:
                    assert_not_reached ();
            }
        }
    }
}
