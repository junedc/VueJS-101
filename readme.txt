curl https://gist.githubusercontent.com/bartoszmajsak/1396344/raw/bff6973325b159254a3ba13c5cb9ac8fda8e382b/prepare-commit-msg.sh > .git/hooks/prepare-commit-msg && chmod u+x .git/hooks/prepare-commit-msg


php-cs-fixer fix --stop-on-violation -v --using-cache=no
