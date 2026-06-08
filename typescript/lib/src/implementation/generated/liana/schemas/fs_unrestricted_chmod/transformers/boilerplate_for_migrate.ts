
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/data"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'mode': _p_change_context(
        $['mode'],
        ($) => ({
            'owner': _p_change_context(
                $['owner'],
                ($) => Permissions(
                    $,
                ),
            ),
            'group': _p_change_context(
                $['group'],
                ($) => Permissions(
                    $,
                ),
            ),
            'others': _p_change_context(
                $['others'],
                ($) => Permissions(
                    $,
                ),
            ),
            'special bits': _p_change_context(
                $['special bits'],
                ($) => _p.optional.from.optional(
                    $,
                ).map(
                    ($) => ({
                        'setuid': _p_change_context(
                            $['setuid'],
                            ($) => $,
                        ),
                        'setgid': _p_change_context(
                            $['setgid'],
                            ($) => $,
                        ),
                        'sticky': _p_change_context(
                            $['sticky'],
                            ($) => $,
                        ),
                    }),
                ),
            ),
        }),
    ),
})

export const Permissions: t_signatures.Permissions = ($) => ({
    'read': _p_change_context(
        $['read'],
        ($) => $,
    ),
    'write': _p_change_context(
        $['write'],
        ($) => $,
    ),
    'execute': _p_change_context(
        $['execute'],
        ($) => $,
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'path does not exist':
                        return _p.ss(
                            $,
                            ($) => ['path does not exist', null],
                        )
                    case 'permission denied':
                        return _p.ss(
                            $,
                            ($) => ['permission denied', null],
                        )
                    case 'invalid mode':
                        return _p.ss(
                            $,
                            ($) => ['invalid mode', null],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})
