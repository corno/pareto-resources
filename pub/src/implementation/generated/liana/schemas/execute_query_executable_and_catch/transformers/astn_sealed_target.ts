    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_text_from_list from "pareto-core/dist/_p_text_from_list"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_query_executable_and_catch/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    import * as v_external_terminal_output from "../../terminal_output/transformers/astn_sealed_target"
    
    export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'program': _p_change_context(
                $['program'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'args': _p_change_context(
                $['args'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                )],
            ),
        },
    )]]
    
    export const Result: t_signatures.Result = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'success':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'success',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'stdout': _p_change_context(
                                        $['stdout'],
                                        ($) => v_external_terminal_output.Message(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'error':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'error',
                            'value': Error(
                                $,
                            ),
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
    
    export const Error: t_signatures.Error = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'failed to spawn':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'failed to spawn',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'message': _p_change_context(
                                        $['message'],
                                        ($) => v_external_terminal_output.Message(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'non zero exit code':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'non zero exit code',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'exit code': _p_change_context(
                                        $['exit code'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': _p_text_from_list(
                                                    v_serialize_number.serialize(
                                                        $,
                                                    ),
                                                    ($) => $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    'stderr': _p_change_context(
                                        $['stderr'],
                                        ($) => v_external_terminal_output.Message(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
