import * as p_i from 'pareto-core/dist/interface/refiner'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

//data types
import * as d_out from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import * as d_error from "./non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = p_i.Refiner_With_Parameter<d_out.Node_Path, d_error.Error, d_in.Text, Parameters>
}


//dependencies
import * as r_from_list_of_characters from "./list_of_characters"


export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
    return r_from_list_of_characters.Node_Path(
        p_list_from_text(
            $,
            ($) => $
        ),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.Text,
): d_out.Context_Path => r_from_list_of_characters.Context_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)