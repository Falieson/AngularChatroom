##login

```
curl -X "POST" "http://localhost:3000/session/login" \
	-d "{\"username\":\"cultofmetatron\",\"password\":\"kittens9\"}"

```

##signup

```

curl -X "POST" "http://localhost:3000/user/signup" \
	-d "{\"username\":\"cultofmetatron\",\"password\":\"kittens9\"}"

```

##post a message

```
curl -X "POST" "http://localhost:3000/messages" \
	-H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImN1bHRvZm1ldGF0cm9uIiwiaWF0IjoxNDI4ODA5OTkxfQ.8RaugyvAjlTykZwS04yPeWbxCZao01lp1hgMfwQsgJU" \
	-d "{\"message\":\"\\\"is anyone here?\\\"\"}"

```

##get messages

```
curl -X "GET" "http://localhost:3000/messages" \
	-H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImN1bHRvZm1ldGF0cm9uIiwiaWF0IjoxNDI4ODA5OTkxfQ.8RaugyvAjlTykZwS04yPeWbxCZao01lp1hgMfwQsgJU"

```


