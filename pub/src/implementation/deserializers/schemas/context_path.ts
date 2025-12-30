import * as _pt from 'pareto-core-transformer'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"

import * as x1 from "../../refiners/schemas/context_path/non_normalized_path"
import * as x2 from "./non_normalized_path"

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: string,
): d_out.Context_Path => {
    return x1.Context_Path(
        x2.Non_Normalized_Path($),
    )
}
