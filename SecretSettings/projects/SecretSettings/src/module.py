#!/usr/bin/env python3

from pineapple.modules import Module, Request
from pineapple.helpers.network_helpers import get_interfaces
import subprocess

module = Module('SecretSettings')


@module.handles_action('load_interfaces')
def load_interfaces(request: Request):
    return get_interfaces()


@module.handles_action('load_settings')
def load_settings(request: Request):
    return get_uci()





def get_uci(config: str = None, section: str = None, option:str = None) -> dict:
    opt = ''
    if config is not None:
        opt += config
        if section is not None:
            opt += '.%s'%section
            if option is not None:
                opt += '.%s'%option
    args = ['uci', 'show']
    if len(opt):
        args += [opt]
    out = subprocess.check_output(args).decode()
    out_dict = {}
    for line in out.splitlines():
        split_line = line.split('.')
        if len(split_line) == 3:
            split_line[2], val = split_line[2].split('=', 1)
            if (val[0] == val[-1]) and val.startswith(("'", '"')):
                val = val[1:-1]
            if split_line[0] not in out_dict.keys():
                out_dict[split_line[0]] = {}
            if split_line[1] not in out_dict[split_line[0]].keys():
                out_dict[split_line[0]][split_line[1]] = {}
            out_dict[split_line[0]][split_line[1]][split_line[2]] = val
    return out_dict


if __name__ == '__main__':
    module.start()

