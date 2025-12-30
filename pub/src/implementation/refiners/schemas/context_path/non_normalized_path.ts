import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_out from "../../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_in from "../../../../interface/generated/pareto/schemas/path/data_types/source"

import { remove_last_element } from "../../../temp/temp_core"

type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    up_steps: number
}

export const Context_Path = (
    $: d_in.Non_Normalized_Path,
): d_out.Context_Path => {

    let intermediate_result: Intermediate_Result = {

        subppath: _pt.list_literal([]),
        up_steps: 0,
    }

    $.segments.__for_each(($) => {
        intermediate_result = _pt.cc($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _pt.ss($, ($) => ({
                    'up_steps': intermediate_result.subppath.get_number_of_elements() === 0
                        ? intermediate_result.up_steps + 1
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.subppath.get_number_of_elements() === 0
                        ? intermediate_result.subppath
                        : remove_last_element(intermediate_result.subppath),
                    'node': null,
                }))
                case 'child': return _pt.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': intermediate_result.subppath.append_element($),
                }))
                case 'current': return _pt.ss($, ($) => intermediate_result)
                case 'nothing': return _pt.ss($, ($) => intermediate_result)
                default: return _pt.au($[0])
            }
        })
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
