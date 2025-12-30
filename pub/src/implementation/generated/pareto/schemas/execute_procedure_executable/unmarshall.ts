import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/execute_procedure_executable/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/execute_procedure_executable/data_types/target"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'args': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "args",
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
export const Error: _i_signatures._T_Error = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'failed to spawn': ($): _i_out._T_Error.SG => ['failed to spawn', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'message': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "message",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'non zero exit code': ($): _i_out._T_Error.SG => ['non zero exit code', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'exit code': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "exit code",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['default number'],
                                    }
                                ),
                            }
                        )),
                        'stderr': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "stderr",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
        }),
    }
)
