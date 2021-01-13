/*
* Copyright (c) 2021 Marvin Ahlgrimm (https://github.com/treagod)
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
    public class Environment {
        public string name { get; private set; }
        public Gee.HashMap<string, string> variables { get; private set; }

        public Environment (string n) {
            name = n;
            variables = new Gee.HashMap<string, string> ();
        }

        public Gee.Set<string> get_variable_names () {
            return variables.keys;
        }

        public string? get_variable (string variable_name)  {
            if (variables.has_key (variable_name)) {
                return variables.get (variable_name);
            }

            return null;
        }
    }
}
