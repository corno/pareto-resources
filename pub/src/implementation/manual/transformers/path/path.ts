import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_path from "../../../../interface/generated/liana/schemas/path/data"

export const extend_context_path = (
    $: d_path.Context_Path,
    $p: {
        'addition': string
    }
): d_path.Context_Path => ({
    'start': $.start,
    'subpath': _p.list.nested_literal_old([
        $.subpath,
        [
            $p.addition
        ]
    ]),
})

export const extend_context_path_with_list = (
    $: d_path.Context_Path,
    $p: {
        'addition': _pi.List<string>
    }
): d_path.Context_Path => ({
    'start': $.start,
    'subpath': _p.list.nested_literal_old([
        $.subpath,
        $p.addition,
    ]),
})


export const extend_node_path = (
    $: d_path.Node_Path,
    $p: {
        'addition': string
    }
): d_path.Node_Path => ({
    'context': deprecated_node_path_to_context_path($),
    'node': $p.addition,
})

export const create_node_path = (
    $: d_path.Context_Path,
    $p: {
        node: string
    }
): d_path.Node_Path => ({
    'context': $,
    'node': $p.node,
})

export const deprecated_node_path_to_context_path = (
    $: d_path.Node_Path
): d_path.Context_Path => extend_context_path(
    $.context,
    {
        'addition': $.node
    }
)