import * as _pi from 'pareto-core-interface'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_error from "../../refiners/schemas/node_path/non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = _pi.Deserializer_With_Parameters<d_out.Node_Path, d_error.Error, Parameters>
}

import * as _pt from 'pareto-core-transformer'

//dependencies
import * as x1 from "../../refiners/schemas/node_path/non_normalized_path"
import * as x2 from "./non_normalized_path"


export const Node_Path: signatures.Node_Path = ($, $p, abort) => {
    return x1.Node_Path(
        x2.Non_Normalized_Path($),
        $p,
        abort,
    )
}
