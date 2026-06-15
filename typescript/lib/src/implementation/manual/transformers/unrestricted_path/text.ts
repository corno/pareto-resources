import * as p_ti from 'pareto-core/dist/transformer/interface'
import p_text_from_list from 'pareto-core/dist/specials/text_from_list'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_to_loc from "./list_of_characters"

export const Node_Path: p_ti.Transformer<d_in.Node_Path, d_out.Text> = ($) => p_text_from_list(t_to_loc.Node_Path($), ($) => $)

export const Context_Path: p_ti.Transformer<d_in.Context_Path, d_out.Text> = ($) => p_text_from_list(t_to_loc.Context_Path($), ($) => $)