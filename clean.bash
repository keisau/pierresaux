#!/bin/bash
cd pierresaux.github.io && git ls-files | grep -v 'favicon\|apple-touch-icon\|mstile.*' | xargs git rm && git clean -xdf
