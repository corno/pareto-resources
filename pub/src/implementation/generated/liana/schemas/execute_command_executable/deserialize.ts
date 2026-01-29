
import * as _p from "pareto-core/dist/deserializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_command_executable/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

import * as v_r_terminal_output from "../terminal_output/deserialize"

export const Parameters: t_signatures.Parameters = ($, abort, $p) => v_unmarshall.Parameters(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Error: t_signatures.Error = ($, abort, $p) => v_unmarshall.Error(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
