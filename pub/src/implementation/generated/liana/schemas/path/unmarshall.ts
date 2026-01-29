
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/path/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Up_Steps: t_signatures.Up_Steps = ($,abort) => v_deserialize_number.deserialize(
    v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    ), 
    ($) => abort(
        ['not a valid number', null]
    )
)
export const Start: t_signatures.Start = ($,abort) => _p_unreachable_code_path(
)
export const Context_Subpath: t_signatures.Context_Subpath = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    )
)
export const Context_Path: t_signatures.Context_Path = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start', 
                ($) => abort(
                    ['no such entry', "start"]
                )
            ), 
            ($) => Start(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'subpath': _p_cc(
            $.__get_entry(
                'subpath', 
                ($) => abort(
                    ['no such entry', "subpath"]
                )
            ), 
            ($) => Context_Subpath(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
export const Node_Path: t_signatures.Node_Path = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'context': _p_cc(
            $.__get_entry(
                'context', 
                ($) => abort(
                    ['no such entry', "context"]
                )
            ), 
            ($) => Context_Path(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'node': _p_cc(
            $.__get_entry(
                'node', 
                ($) => abort(
                    ['no such entry', "node"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)
export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'leading slash': _p_cc(
            $.__get_entry(
                'leading slash', 
                ($) => abort(
                    ['no such entry', "leading slash"]
                )
            ), 
            ($) => v_deserialize_boolean.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
        'segments': _p_cc(
            $.__get_entry(
                'segments', 
                ($) => abort(
                    ['no such entry', "segments"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_unreachable_code_path(
                )
            )
        ),
        'trailing slash': _p_cc(
            $.__get_entry(
                'trailing slash', 
                ($) => abort(
                    ['no such entry', "trailing slash"]
                )
            ), 
            ($) => v_deserialize_boolean.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
    })
)
