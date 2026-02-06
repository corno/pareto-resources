    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/read_file/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/read_file/data"
    
    import * as v_path from "../../path/transformers/boilerplate_for_migrate"
    
    import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate"
    
    export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
        $,
    )
    
    export const Error: t_signatures.Error = ($) => _p.decide.state(
        $,
        ($): t_out.Error => {
            switch ($[0]) {
                case 'file does not exist':
                    return _p.ss(
                        $,
                        ($) => ['file does not exist', null],
                    )
                case 'node is not a file':
                    return _p.ss(
                        $,
                        ($) => ['node is not a file', null],
                    )
                case 'permission denied':
                    return _p.ss(
                        $,
                        ($) => ['permission denied', null],
                    )
                case 'file too large':
                    return _p.ss(
                        $,
                        ($) => ['file too large', null],
                    )
                case 'device not ready':
                    return _p.ss(
                        $,
                        ($) => ['device not ready', null],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )
    
    export const Result: t_signatures.Result = ($) => v_list_of_characters.List_of_Characters(
        $,
    )
