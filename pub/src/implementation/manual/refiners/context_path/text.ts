import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

import * as from_list_of_characters from "./list_of_characters"

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.Text,
): d_out.Context_Path => from_list_of_characters.Context_Path(
    _p_list_from_text(
        $,
        ($) => $
    )
)
