    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/log_error/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/log_error/data_types/target"
    
    
    export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'lines': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "lines",
                    }
                ), ($) => _i_generic.process_unconstrained_list(
                    $,
                    {
                        'value': ($) => _i_generic.process_text(
                            $,
                            null
                        ),
                    }
                )),
            }),
        }
    )
