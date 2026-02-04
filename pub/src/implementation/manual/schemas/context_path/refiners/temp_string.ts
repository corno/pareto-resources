import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "../../../../../interface/generated/liana/schemas/path/data"

import * as x1 from "./non_normalized_path"
import * as x2 from "../../non_normalized_path/refiners/text"

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: string,
): d_out.Context_Path => x1.Context_Path(
    x2.Non_Normalized_Path(
        _p_list_from_text(
            $,
            ($) => $,
        )
    ),
)
