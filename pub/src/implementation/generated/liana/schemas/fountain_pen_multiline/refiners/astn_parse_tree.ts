    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen_multiline/unmarshall"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen_multiline/data"
    
    import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"
    
    import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"
    
    import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
    
    import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"
    
    export const Directory: t_signatures.Directory = ($, abort) => _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
        ($, id) => Node(
            $,
            ($) => abort(
                $,
            ),
        ),
    )
    
    export const Node: t_signatures.Node = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Node => {
                switch ($t) {
                    case 'file':
                        return _p_change_context(
                            $['value'],
                            ($) => ['file', Paragraph(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'directory':
                        return _p_change_context(
                            $['value'],
                            ($) => ['directory', Directory(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Paragraph: t_signatures.Paragraph = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Paragraph => {
                switch ($t) {
                    case 'composed':
                        return _p_change_context(
                            $['value'],
                            ($) => ['composed', _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                                ($) => Paragraph(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'sentences':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sentences', _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                                ($) => Phrase(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'optional':
                        return _p_change_context(
                            $['value'],
                            ($) => ['optional', _p.optional.map(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null],
                                    ),
                                ),
                                ($) => Paragraph(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'nothing':
                        return _p_change_context(
                            $['value'],
                            ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'rich list':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rich list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'items': _p_change_context(
                                        $.__get_entry(
                                            'items',
                                            ($) => abort(
                                                ['no such entry', "items"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Paragraph(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                    'if empty': _p_change_context(
                                        $.__get_entry(
                                            'if empty',
                                            ($) => abort(
                                                ['no such entry', "if empty"],
                                            ),
                                        ),
                                        ($) => Paragraph(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'if not empty': _p_change_context(
                                        $.__get_entry(
                                            'if not empty',
                                            ($) => abort(
                                                ['no such entry', "if not empty"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'indent': _p_change_context(
                                                    $.__get_entry(
                                                        'indent',
                                                        ($) => abort(
                                                            ['no such entry', "indent"],
                                                        ),
                                                    ),
                                                    ($) => v_deserialize_boolean.deserialize(
                                                        _p_list_from_text(
                                                            v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            ),
                                                            ($) => $,
                                                        ),
                                                        ($) => abort(
                                                            ['not a valid boolean', null],
                                                        ),
                                                    ),
                                                ),
                                                'before': _p_change_context(
                                                    $.__get_entry(
                                                        'before',
                                                        ($) => abort(
                                                            ['no such entry', "before"],
                                                        ),
                                                    ),
                                                    ($) => Paragraph(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'separator': _p_change_context(
                                                    $.__get_entry(
                                                        'separator',
                                                        ($) => abort(
                                                            ['no such entry', "separator"],
                                                        ),
                                                    ),
                                                    ($) => Paragraph(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'after': _p_change_context(
                                                    $.__get_entry(
                                                        'after',
                                                        ($) => abort(
                                                            ['no such entry', "after"],
                                                        ),
                                                    ),
                                                    ($) => Paragraph(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Phrase: t_signatures.Phrase = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Phrase => {
                switch ($t) {
                    case 'single line':
                        return _p_change_context(
                            $['value'],
                            ($) => ['single line', Single_Line(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'indent':
                        return _p_change_context(
                            $['value'],
                            ($) => ['indent', Paragraph(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'composed':
                        return _p_change_context(
                            $['value'],
                            ($) => ['composed', _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                                ($) => Phrase(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'optional':
                        return _p_change_context(
                            $['value'],
                            ($) => ['optional', _p.optional.map(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null],
                                    ),
                                ),
                                ($) => Phrase(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            )],
                        )
                    case 'nothing':
                        return _p_change_context(
                            $['value'],
                            ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        )
                    case 'rich list':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rich list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'items': _p_change_context(
                                        $.__get_entry(
                                            'items',
                                            ($) => abort(
                                                ['no such entry', "items"],
                                            ),
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                            ($) => Phrase(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                    'if empty': _p_change_context(
                                        $.__get_entry(
                                            'if empty',
                                            ($) => abort(
                                                ['no such entry', "if empty"],
                                            ),
                                        ),
                                        ($) => Phrase(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'if not empty': _p_change_context(
                                        $.__get_entry(
                                            'if not empty',
                                            ($) => abort(
                                                ['no such entry', "if not empty"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'before': _p_change_context(
                                                    $.__get_entry(
                                                        'before',
                                                        ($) => abort(
                                                            ['no such entry', "before"],
                                                        ),
                                                    ),
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'separator': _p_change_context(
                                                    $.__get_entry(
                                                        'separator',
                                                        ($) => abort(
                                                            ['no such entry', "separator"],
                                                        ),
                                                    ),
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'after': _p_change_context(
                                                    $.__get_entry(
                                                        'after',
                                                        ($) => abort(
                                                            ['no such entry', "after"],
                                                        ),
                                                    ),
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    )
    
    export const Single_Line: t_signatures.Single_Line = ($, abort) => _p.list.map(
        v_unmarshalled_from_parse_tree.List(
            $,
            ($) => abort(
                ['expected a list', null],
            ),
        ),
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    ['expected a state', null],
                ),
            ),
            ($) => _p.decide.text(
                $['option']['value'],
                ($t): t_out.Single_Line.L => {
                    switch ($t) {
                        case 'snippet':
                            return _p_change_context(
                                $['value'],
                                ($) => ['snippet', v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                )],
                            )
                        case 'serialize':
                            return _p_change_context(
                                $['value'],
                                ($) => ['serialize', List_of_Characters(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'rich list':
                            return _p_change_context(
                                $['value'],
                                ($) => ['rich list', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'items': _p_change_context(
                                            $.__get_entry(
                                                'items',
                                                ($) => abort(
                                                    ['no such entry', "items"],
                                                ),
                                            ),
                                            ($) => _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
                                                    ),
                                                ),
                                                ($) => Single_Line(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if empty': _p_change_context(
                                            $.__get_entry(
                                                'if empty',
                                                ($) => abort(
                                                    ['no such entry', "if empty"],
                                                ),
                                            ),
                                            ($) => Single_Line(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'if not empty': _p_change_context(
                                            $.__get_entry(
                                                'if not empty',
                                                ($) => abort(
                                                    ['no such entry', "if not empty"],
                                                ),
                                            ),
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'before': _p_change_context(
                                                        $.__get_entry(
                                                            'before',
                                                            ($) => abort(
                                                                ['no such entry', "before"],
                                                            ),
                                                        ),
                                                        ($) => Single_Line(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'separator': _p_change_context(
                                                        $.__get_entry(
                                                            'separator',
                                                            ($) => abort(
                                                                ['no such entry', "separator"],
                                                            ),
                                                        ),
                                                        ($) => Single_Line(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'after': _p_change_context(
                                                        $.__get_entry(
                                                            'after',
                                                            ($) => abort(
                                                                ['no such entry', "after"],
                                                            ),
                                                        ),
                                                        ($) => Single_Line(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    }),
                                )],
                            )
                        default:
                            return abort(
                                ['unknown option', $['option']['value']],
                            )
                    }
                },
            ),
        ),
    )
    
    export const List_of_Characters: t_signatures.List_of_Characters = ($, abort) => _p.list.map(
        v_unmarshalled_from_parse_tree.List(
            $,
            ($) => abort(
                ['expected a list', null],
            ),
        ),
        ($) => v_deserialize_number.deserialize(
            _p_list_from_text(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
                ($) => $,
            ),
            ($) => abort(
                ['not a valid number', null],
            ),
        ),
    )
