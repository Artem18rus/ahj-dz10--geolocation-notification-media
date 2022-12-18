#!/bin/bash
COUNTER=1
SERVER=" Connection error"
if [ -n "$1" ]
then
    for (( ; ; ))
    do
        if curl -s -o /dev/null -w "%{http_code}" $1
        then
            SERVER=" Connction successed  to $1"
            break
        fi
        
        if [ $COUNTER -eq 10 ]
        then break
        fi
        echo " Not connection yet: Try $COUNTER"
        ((COUNTER=$COUNTER+1))
    done
    echo $SERVER
else
    echo "You must to write fisrt parameter - address"
fi
