import * as _pi from 'pareto-core-interface'

import * as d_out from "../../../../interface/generated/pareto/schemas/path/data"
import * as d_error from "./refiners/non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export namespace signatures {
    export type Node_Path = _pi.Deserializer_With_Parameters<d_out.Node_Path, d_error.Error, Parameters>
}

import * as _pt from 'pareto-core-transformer'

//dependencies
import * as x1 from "./refiners/non_normalized_path"
import * as x2 from "../non_normalized_path/deserializers"


export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
    return x1.Node_Path(
        x2.Non_Normalized_Path($),
        abort,
        $p,
    )
}
