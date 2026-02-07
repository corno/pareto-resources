import * as _pi from 'pareto-core/dist/interface'

import * as d_out from "../../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
import * as d_error from "./non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = _pi.Refiner_With_Parameter<d_out.Node_Path, d_error.Error, d_in.List_of_Characters, Parameters>
}

import * as _pt from 'pareto-core/dist/expression'

//dependencies
import * as x1 from "./non_normalized_path"
import * as x2 from "../../non_normalized_path/refiners/text"


export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
    return x1.Node_Path(
        x2.Non_Normalized_Path($),
        abort,
        $p,
    )
}
