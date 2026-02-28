import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_out from "../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_error from "./non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = _pi.Refiner_With_Parameter<d_out.Node_Path, d_error.Error, d_in.List_of_Characters, Parameters>
}


//dependencies
import * as r_from_non_normalized_path from "./non_normalized_path"
import * as r_non_normalized_path_from_list_of_characters from "../non_normalized_path/list_of_characters"


export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
    return r_from_non_normalized_path.Node_Path(
        r_non_normalized_path_from_list_of_characters.Non_Normalized_Path($),
        abort,
        $p,
    )
}
