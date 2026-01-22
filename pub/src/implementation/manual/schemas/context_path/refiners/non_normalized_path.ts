import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

import * as d_out from "../../../../../interface/generated/pareto/schemas/path/data"
import * as d_in from "../../../../../interface/generated/pareto/schemas/path/data"

import { remove_last_element } from "../../../../temp/temp_core"

type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    up_steps: number
}

export const Context_Path = (
    $: d_in.Non_Normalized_Path,
): d_out.Context_Path => {

    let intermediate_result: Intermediate_Result = {

        subppath: _p.list.literal([]),
        up_steps: 0,
    }

    $.segments.__for_each(($) => {
        intermediate_result = _p.sg($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _p.ss($, ($) => ({
                    'up_steps': _p.boolean.list_is_empty(intermediate_result.subppath)
                        ? intermediate_result.up_steps + 1
                        : intermediate_result.up_steps,
                    'subppath': _p.boolean.list_is_empty(intermediate_result.subppath)
                        ? intermediate_result.subppath
                        : remove_last_element(intermediate_result.subppath),
                    'node': null,
                }))
                case 'child': return _p.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': _p.list.nested_literal_old([
                        intermediate_result.subppath,
                        [
                            $
                        ]
                    ]),
                }))
                case 'current': return _p.ss($, ($) => intermediate_result)
                case 'nothing': return _p.ss($, ($) => intermediate_result)
                default: return _p.au($[0])
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
