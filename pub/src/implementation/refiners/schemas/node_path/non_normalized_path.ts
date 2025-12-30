import * as _pt from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_out from "../../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_in from "../../../../interface/generated/pareto/schemas/path/data_types/source"

import { remove_last_element } from "../../../temp/temp_core"


type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    node: string | null
    up_steps: number
}

export type Error =
    | ['trailing slash not allowed', null]
    | ['no node', null]

export namespace signatures {
    export type Node_Path = _pi.Refiner_With_Parameters<d_out.Node_Path, Error, d_in.Non_Normalized_Path, { 'pedantic': boolean }>
}

export const Node_Path: signatures.Node_Path = ($, $p, abort) => {

    if ($p.pedantic) {
        if ($['trailing slash']) {
            abort(['trailing slash not allowed', null])
        }
    }
    let intermediate_result: Intermediate_Result = {

        subppath: _pt.list_literal([]),
        node: null,
        up_steps: 0,
    }

    $.segments.__for_each(($) => {
        intermediate_result = _pt.cc($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _pt.ss($, ($) => ({
                    'up_steps': intermediate_result.node === null
                        ? intermediate_result.subppath.get_number_of_elements() === 0
                            ? intermediate_result.up_steps + 1
                            : intermediate_result.up_steps
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath.get_number_of_elements() === 0
                            ? _pt.list_literal([])
                            : remove_last_element(intermediate_result.subppath)
                        : intermediate_result.subppath,
                    'node': null,
                }))
                case 'child': return _pt.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath
                        : intermediate_result.subppath.append_element(intermediate_result.node),
                    'node': $,
                }))
                case 'current': return _pt.ss($, ($) => intermediate_result)
                case 'nothing': return _pt.ss($, ($) => intermediate_result)
                default: return _pt.au($[0])
            }
        })
    })

    if (intermediate_result.node === null) {
        return abort(['no node', null])
    }
    return {
        'context': {
            'start': $['leading slash']
                ? ['absolute', null]
                : ['relative', {
                    'up steps': intermediate_result.up_steps,
                }],
            'subpath': intermediate_result.subppath,
        },
        'node': intermediate_result.node
    }

}
