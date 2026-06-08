import * as _p from 'pareto-core/dist/command'

import * as signatures from "../../../interface/signatures/filesystem_sandboxed"

//dependencies
import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path"


export const $$: signatures.commands.write_file = _p.command_procedure(
    ($p, $cr, $qr, $x) => [
        $cr.unrestricted.execute(
            {
                'path': t_path_to_path.Node_Path(
                    $p.path,
                    {
                        'context': $x.context
                    }
                ),
                'data': $p.data,
            },
            ($) => $,
        )
    ]
)