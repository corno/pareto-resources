import * as p_i from 'pareto-core/dist/interface/refiner'

import * as d_out from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_error from "./non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = p_i.Refiner_With_Parameter<d_out.Node_Path, d_error.Error, d_in.List_of_Characters, Parameters>
}


//dependencies
import * as r_from_non_normalized_path from "./non_normalized_path"
import * as r_non_normalized_path_from_loc from "../path non_normalized/list_of_characters"

export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
    return r_from_non_normalized_path.Node_Path(
        r_non_normalized_path_from_loc.Non_Normalized_Path($),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.List_of_Characters,
): d_out.Context_Path => r_from_non_normalized_path.Context_Path(
    r_non_normalized_path_from_loc.Non_Normalized_Path($),
)