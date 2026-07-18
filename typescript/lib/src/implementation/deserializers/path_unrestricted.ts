import type * as p_ from 'pareto-core/implementation/refiner'


import type * as s_in from "../../interface/schemas/list_of_characters.js"
import type * as s_out from "../../interface/schemas/fs_unrestricted_path.js"
import type * as s_function from "../../declarations/refiners/path_unrestricted/non_normalized_path.js"

export namespace s_function2 {
    export type Parameters = { 'pedantic': boolean }
}


export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    s_function.Error,
    string,
    s_function2.Parameters
>


//dependencies
import * as r_from_non_normalized_path from "../refiners/path_unrestricted/non_normalized_path.js"
import * as deser_non_normalized from "./path_non_normalized.js"

export const Node_Path: Node_Path = ($, abort, $p) => {
    return r_from_non_normalized_path.Node_Path(
        deser_non_normalized.Non_Normalized_Path($),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: string,
): s_out.Context_Path => r_from_non_normalized_path.Context_Path(
    deser_non_normalized.Non_Normalized_Path($),
)