import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_out from "../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "../../../../interface/generated/liana/schemas/path/data"

export const extend_context_path_with_single_step = (
    $: d_in.Context_Path,
    $p: {
        'addition': string
    }
): d_out.Context_Path => ({
    'start': $.start,
    'subpath': _p.list.nested_literal_old([
        $.subpath,
        [
            $p.addition
        ]
    ]),
})

export const extend_context_path_with_list = (
    $: d_in.Context_Path,
    $p: {
        'addition': _pi.List<string>
    }
): d_out.Context_Path => ({
    'start': $.start,
    'subpath': _p.list.nested_literal_old([
        $.subpath,
        $p.addition,
    ]),
})


export const deprecated_extend_node_path = (
    $: d_in.Node_Path,
    $p: {
        'addition': string
    }
): d_out.Node_Path => ({
    'context': deprecated_node_path_to_context_path($),
    'node': $p.addition,
})

export const create_node_path = (
    $: d_in.Context_Path,
    $p: {
        node: string
    }
): d_out.Node_Path => ({
    'context': $,
    'node': $p.node,
})

export const deprecated_node_path_to_context_path = (
    $: d_in.Node_Path
): d_out.Context_Path => extend_context_path_with_single_step(
    $.context,
    {
        'addition': $.node
    }
)