import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/assign'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

export type Parameters = { 'pedantic': boolean }

//dependencies
import * as t_from_list_of_characters from "./list_of_characters"


export const Non_Normalized_Path = (
    $: d_in.Text,
): d_out.Non_Normalized_Path => {
    return t_from_list_of_characters.Non_Normalized_Path(
        p_list_from_text(
            $,
            ($) => $
        )
    )
}
