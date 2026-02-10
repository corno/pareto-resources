import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_out from "../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "../../../../interface/generated/liana/schemas/path/data"

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
    export type Node_Path = _pi.Refiner_With_Parameter<d_out.Node_Path, Error, d_in.Non_Normalized_Path, { 'pedantic': boolean }>
}

export const Node_Path: signatures.Node_Path = ($, abort, $p) => {

    if ($p.pedantic) {
        if ($['trailing slash']) {
            abort(['trailing slash not allowed', null])
        }
    }
    let intermediate_result: Intermediate_Result = {

        subppath: _p.list.literal([]),
        node: null,
        up_steps: 0,
    }

    $.segments.__l_map(($) => {
        intermediate_result = _p.decide.state($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _p.ss($, ($) => ({
                    'up_steps': intermediate_result.node === null
                        ? _p.boolean.from.list( intermediate_result.subppath).is_empty()
                            ? intermediate_result.up_steps + 1
                            : intermediate_result.up_steps
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? _p.boolean.from.list( intermediate_result.subppath).is_empty()
                            ? _p.list.literal([])
                            : remove_last_element(intermediate_result.subppath)
                        : intermediate_result.subppath,
                    'node': null,
                }))
                case 'child': return _p.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath
                        : _p.list.nested_literal_old([
                            intermediate_result.subppath,
                            [
                                intermediate_result.node
                            ]
                        ]),
                    'node': $,
                }))
                case 'current': return _p.ss($, ($) => intermediate_result)
                case 'nothing': return _p.ss($, ($) => intermediate_result)
                default: return _p.au($[0])
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
