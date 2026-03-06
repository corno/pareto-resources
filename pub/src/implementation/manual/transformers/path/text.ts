import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/path/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_to_loc from "./list_of_characters"

export const Node_Path: _pi.Transformer<d_in.Node_Path, d_out.Text> = ($) => _p_text_from_list(t_to_loc.Context_Path($.context), ($) => $)

export const Context_Path: _pi.Transformer<d_in.Context_Path, d_out.Text> = ($) => _p_text_from_list(t_to_loc.Context_Path($), ($) => $)