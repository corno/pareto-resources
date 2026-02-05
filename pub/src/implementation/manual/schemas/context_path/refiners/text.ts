
import * as d_out from "../../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as x1 from "./non_normalized_path"
import * as x2 from "../../non_normalized_path/refiners/text"

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.List_of_Characters,
): d_out.Context_Path => x1.Context_Path(
    x2.Non_Normalized_Path($),
)
