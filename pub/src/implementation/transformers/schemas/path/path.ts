import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as d_path from "../../../../interface/generated/pareto/schemas/path/data_types/target"

export const extend_context_path = (
    $: d_path.Context_Path,
    $p: {
        'addition': string
    }): d_path.Context_Path => {
    return {
        'start': $.start,
        'subpath': $.subpath.append_element($p.addition)
    }
}

export const extend_node_path = (
    $: d_path.Node_Path,
    $p: {
        'addition': string
    }): d_path.Node_Path => {
    return {
        'context': deprecated_node_path_to_context_path($),
        'node': $p.addition,
    }
}

export const create_node_path = (
    $: d_path.Context_Path,
    node: string
): d_path.Node_Path => {
    return {
        'context': $,
        'node': node,
    }
}

export const deprecated_node_path_to_context_path = (
    $: d_path.Node_Path
): d_path.Context_Path => {
    return extend_context_path(
        $.context,
        {
            'addition': $.node
        }
    )
}