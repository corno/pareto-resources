
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "mode": _p_change_context(
            $['mode'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "owner": _p_change_context(
                        $['owner'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "group": _p_change_context(
                        $['group'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "others": _p_change_context(
                        $['others'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "special bits": _p_change_context(
                        $['special bits'],
                        ($) => ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "setuid": _p_change_context(
                                        $['setuid'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "setgid": _p_change_context(
                                        $['setgid'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "sticky": _p_change_context(
                                        $['sticky'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                },
                            )]]],
                            () => ['not set', null],
                        )],
                    ),
                },
            )]],
        ),
    },
)]]

export const Permissions: t_signatures.Permissions = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "read": _p_change_context(
            $['read'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "write": _p_change_context(
            $['write'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "execute": _p_change_context(
            $['execute'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'path does not exist':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'path does not exist',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'permission denied':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'invalid mode':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'invalid mode',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]
