const err = new Error('test')
err.title = "resource not found"
err.errors = ["404"]
err.status = 404
console.log(err)
