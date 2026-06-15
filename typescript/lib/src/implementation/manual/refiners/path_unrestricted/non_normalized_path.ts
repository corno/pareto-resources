import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_temp from 'pareto-core/dist/assign'
import * as p_i from 'pareto-core/dist/interface/refiner'

import * as d_out from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_in from "../../../../interface/generated/liana/schemas/path_non_normalized/data"

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
    export type Node_Path = p_i.Refiner_With_Parameter<d_out.Node_Path, Error, d_in.Non_Normalized_Path, { 'pedantic': boolean }>
}

export const Node_Path: signatures.Node_Path = ($, abort, $p) => {

    if ($p.pedantic) {
        if ($['trailing slash']) {
            abort(['trailing slash not allowed', null])
        }
    }
    let intermediate_result: Intermediate_Result = {

        subppath: p_.literal.list([]),
        node: null,
        up_steps: 0,
    }

    $.segments.__l_map(($) => {
        intermediate_result = p_.decide.state($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return p_.ss($, ($) => ({
                    'up_steps': intermediate_result.node === null
                        ? p_temp.boolean.from.list( intermediate_result.subppath).is_empty()
                            ? intermediate_result.up_steps + 1
                            : intermediate_result.up_steps
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? p_temp.boolean.from.list( intermediate_result.subppath).is_empty()
                            ? p_.literal.list([])
                            : remove_last_element(intermediate_result.subppath)
                        : intermediate_result.subppath,
                    'node': null,
                }))
                case 'child': return p_.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath
                        : p_.literal.nested_list([
                            intermediate_result.subppath,
                            [
                                intermediate_result.node
                            ]
                        ]),
                    'node': $,
                }))
                case 'current': return p_.ss($, ($) => intermediate_result)
                case 'nothing': return p_.ss($, ($) => intermediate_result)
                default: return p_.au($[0])
            }
        })
        return null
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

type Intermediate_Result2 = {
    subppath: d_out.Context_Subpath
    up_steps: number
}

export const Context_Path = (
    $: d_in.Non_Normalized_Path,
): d_out.Context_Path => {

    let intermediate_result: Intermediate_Result2 = {

        subppath: p_.literal.list([]),
        up_steps: 0,
    }

    $.segments.__l_map(($) => {
        intermediate_result = p_.decide.state($, ($): Intermediate_Result2 => {
            switch ($[0]) {
                case 'parent': return p_.ss($, ($) => ({
                    'up_steps': p_temp.boolean.from.list(intermediate_result.subppath).is_empty()
                        ? intermediate_result.up_steps + 1
                        : intermediate_result.up_steps,
                    'subppath': p_temp.boolean.from.list(intermediate_result.subppath).is_empty()
                        ? intermediate_result.subppath
                        : remove_last_element(intermediate_result.subppath),
                    'node': null,
                }))
                case 'child': return p_.ss($, ($): Intermediate_Result2 => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': p_.literal.nested_list([
                        intermediate_result.subppath,
                        [
                            $
                        ]
                    ]),
                }))
                case 'current': return p_.ss($, ($) => intermediate_result)
                case 'nothing': return p_.ss($, ($) => intermediate_result)
                default: return p_.au($[0])
            }
        })
        return null
    })

    return {
        'start': $['leading slash']
            ? ['absolute', null]
            : ['relative', {
                'up steps': intermediate_result.up_steps,
            }],
        'subpath': intermediate_result.subppath,
    }

}
