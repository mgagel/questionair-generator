(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2(elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2(elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var mlu$fragebogengenerator$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Basics$not = _Basics_not;
var elm$core$Debug$log = _Debug_log;
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$file$File$toString = _File_toString;
var elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var mlu$fragebogengenerator$Answer$Answer = F3(
	function (id, text, typ) {
		return {id: id, text: text, typ: typ};
	});
var mlu$fragebogengenerator$Answer$regularAnswer = F2(
	function (_int, string) {
		return {id: _int, text: string, typ: 'regular'};
	});
var mlu$fragebogengenerator$Answer$getAnswersWithRange = F3(
	function (begin, end, index) {
		return _Utils_eq(begin, end) ? _List_fromArray(
			[
				A2(
				mlu$fragebogengenerator$Answer$regularAnswer,
				index,
				elm$core$String$fromInt(end))
			]) : _Utils_ap(
			_List_fromArray(
				[
					A2(
					mlu$fragebogengenerator$Answer$regularAnswer,
					index,
					elm$core$String$fromInt(begin))
				]),
			A3(mlu$fragebogengenerator$Answer$getAnswersWithRange, begin + 1, end, index + 1));
	});
var mlu$fragebogengenerator$Answer$getBipolarAnswers = function (string) {
	var _n0 = elm$core$String$toInt(string);
	if (_n0.$ === 'Nothing') {
		return _List_Nil;
	} else {
		var val = _n0.a;
		return A3(mlu$fragebogengenerator$Answer$getAnswersWithRange, -val, val, 0);
	}
};
var mlu$fragebogengenerator$Answer$getUnipolarAnswers = function (string) {
	var _n0 = elm$core$String$toInt(string);
	if (_n0.$ === 'Nothing') {
		return _List_Nil;
	} else {
		var val = _n0.a;
		return A3(mlu$fragebogengenerator$Answer$getAnswersWithRange, 1, val, 0);
	}
};
var mlu$fragebogengenerator$Answer$getYesNoAnswers = function (questionType) {
	return (questionType === 'Ja/Nein Frage') ? _List_fromArray(
		[
			A2(mlu$fragebogengenerator$Answer$regularAnswer, 0, 'Ja'),
			A2(mlu$fragebogengenerator$Answer$regularAnswer, 1, 'Nein')
		]) : _List_Nil;
};
var mlu$fragebogengenerator$Answer$update = F2(
	function (answerToUpdate, answer) {
		return _Utils_eq(answer.id, answerToUpdate.id) ? answerToUpdate : answer;
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _n0) {
				var trues = _n0.a;
				var falses = _n0.b;
				return pred(x) ? _Utils_Tuple2(
					A2(elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2(elm$core$List$cons, x, falses));
			});
		return A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var mlu$fragebogengenerator$QElement$getAnswerWithID = F2(
	function (id, newElement) {
		if (newElement.$ === 'Question') {
			var record = newElement.a;
			return elm$core$List$head(
				A2(
					elm$core$List$partition,
					function (e) {
						return _Utils_eq(e.id, id);
					},
					record.answers).a);
		} else {
			var record = newElement.a;
			return elm$core$Maybe$Nothing;
		}
	});
var mlu$fragebogengenerator$Condition$addAnswerOfQuestionToCondition = F3(
	function (id, newElement, condition) {
		var _n0 = A2(mlu$fragebogengenerator$QElement$getAnswerWithID, id, newElement);
		if (_n0.$ === 'Just') {
			var newAnswer = _n0.a;
			return _Utils_update(
				condition,
				{
					answers: _Utils_ap(
						condition.answers,
						_List_fromArray(
							[newAnswer]))
				});
		} else {
			return condition;
		}
	});
var mlu$fragebogengenerator$Condition$deleteCondAnswer = F2(
	function (list, id) {
		return A2(
			elm$core$List$partition,
			function (answer) {
				return !_Utils_eq(answer.id, id);
			},
			list).a;
	});
var mlu$fragebogengenerator$Condition$deleteAnswerInCondition = F2(
	function (id, condition) {
		return _Utils_update(
			condition,
			{
				answers: A2(mlu$fragebogengenerator$Condition$deleteCondAnswer, condition.answers, id)
			});
	});
var mlu$fragebogengenerator$Condition$deleteConditionWithChild = F2(
	function (list, id) {
		return A2(
			elm$core$List$partition,
			function (e) {
				return !_Utils_eq(e.child_id, id);
			},
			list).a;
	});
var mlu$fragebogengenerator$Condition$deleteConditionWithParent = F2(
	function (list, id) {
		return A2(
			elm$core$List$partition,
			function (e) {
				return !_Utils_eq(e.parent_id, id);
			},
			list).a;
	});
var mlu$fragebogengenerator$Condition$deleteConditionWithElement = F2(
	function (list, id) {
		return A2(
			mlu$fragebogengenerator$Condition$deleteConditionWithParent,
			A2(mlu$fragebogengenerator$Condition$deleteConditionWithChild, list, id),
			id);
	});
var mlu$fragebogengenerator$Condition$initCondition = {answers: _List_Nil, child_id: -1, isValid: false, parent_id: -1};
var mlu$fragebogengenerator$Condition$getConditionWithParentID = F2(
	function (list, id) {
		var _n0 = elm$core$List$head(
			A2(
				elm$core$List$partition,
				function (e) {
					return _Utils_eq(e.parent_id, id);
				},
				list).a);
		if (_n0.$ === 'Just') {
			var condition = _n0.a;
			return condition;
		} else {
			return mlu$fragebogengenerator$Condition$initCondition;
		}
	});
var mlu$fragebogengenerator$Condition$removeConditionFromCondList = F2(
	function (condition, list) {
		return A2(
			elm$core$List$partition,
			function (c) {
				return !_Utils_eq(c.parent_id, condition.parent_id);
			},
			list).a;
	});
var mlu$fragebogengenerator$Condition$setParentChildInCondition = F3(
	function (parent, child, condition) {
		return _Utils_update(
			condition,
			{child_id: child, isValid: true, parent_id: parent});
	});
var mlu$fragebogengenerator$Condition$setValid = F2(
	function (condition, value) {
		return _Utils_update(
			condition,
			{isValid: value});
	});
var mlu$fragebogengenerator$Condition$updateCondition = F2(
	function (conditionToUpdate, condition) {
		return _Utils_eq(condition.parent_id, conditionToUpdate.parent_id) ? conditionToUpdate : condition;
	});
var mlu$fragebogengenerator$Condition$updateConditionAnswer = F3(
	function (old, _new, answer) {
		return _Utils_eq(answer.id, old) ? _Utils_update(
			answer,
			{id: _new}) : (_Utils_eq(answer.id, _new) ? _Utils_update(
			answer,
			{id: old}) : answer);
	});
var mlu$fragebogengenerator$Condition$updateConditionWithAnswer = F3(
	function (old, _new, condition) {
		return _Utils_update(
			condition,
			{
				answers: A2(
					elm$core$List$map,
					A2(mlu$fragebogengenerator$Condition$updateConditionAnswer, old, _new),
					condition.answers)
			});
	});
var mlu$fragebogengenerator$Condition$updateConditionAnswers = F3(
	function (list, old, _new) {
		return A2(
			elm$core$List$map,
			A2(mlu$fragebogengenerator$Condition$updateConditionWithAnswer, old, _new),
			list);
	});
var mlu$fragebogengenerator$Condition$getNewConditionID = F3(
	function (cond_id, old, _new) {
		return _Utils_eq(cond_id, old) ? _new : (_Utils_eq(cond_id, _new) ? old : cond_id);
	});
var mlu$fragebogengenerator$Condition$updateConditionID = F3(
	function (old, _new, condition) {
		return _Utils_update(
			condition,
			{
				child_id: A3(mlu$fragebogengenerator$Condition$getNewConditionID, condition.child_id, old, _new),
				parent_id: A3(mlu$fragebogengenerator$Condition$getNewConditionID, condition.parent_id, old, _new)
			});
	});
var mlu$fragebogengenerator$Condition$updateIDsInCondition = F3(
	function (list, old, _new) {
		return A2(
			elm$core$List$map,
			A2(mlu$fragebogengenerator$Condition$updateConditionID, old, _new),
			list);
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$string = _Json_decodeString;
var mlu$fragebogengenerator$QElement$Note = function (a) {
	return {$: 'Note', a: a};
};
var mlu$fragebogengenerator$QElement$NoteRecord = F2(
	function (id, text) {
		return {id: id, text: text};
	});
var mlu$fragebogengenerator$Decoder$noteDecoder = A2(
	elm$json$Json$Decode$map,
	mlu$fragebogengenerator$QElement$Note,
	A3(
		elm$json$Json$Decode$map2,
		mlu$fragebogengenerator$QElement$NoteRecord,
		A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$int),
		A2(elm$json$Json$Decode$field, 'text', elm$json$Json$Decode$string)));
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var elm$json$Json$Decode$map3 = _Json_map3;
var mlu$fragebogengenerator$Decoder$answerDecoder = A4(
	elm$json$Json$Decode$map3,
	mlu$fragebogengenerator$Answer$Answer,
	A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'text', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, '_type', elm$json$Json$Decode$string));
var mlu$fragebogengenerator$QElement$Question = function (a) {
	return {$: 'Question', a: a};
};
var mlu$fragebogengenerator$QElement$QuestionRecord = F6(
	function (id, text, answers, hint, typ, questionTime) {
		return {answers: answers, hint: hint, id: id, questionTime: questionTime, text: text, typ: typ};
	});
var mlu$fragebogengenerator$Decoder$questionDecoder = A2(
	elm$json$Json$Decode$map,
	mlu$fragebogengenerator$QElement$Question,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'question_time',
		elm$json$Json$Decode$string,
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'question_type',
			elm$json$Json$Decode$string,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'hint',
				elm$json$Json$Decode$string,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'answers',
					elm$json$Json$Decode$list(mlu$fragebogengenerator$Decoder$answerDecoder),
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'text',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'id',
							elm$json$Json$Decode$int,
							elm$json$Json$Decode$succeed(mlu$fragebogengenerator$QElement$QuestionRecord))))))));
var mlu$fragebogengenerator$Decoder$elementDecoder = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[mlu$fragebogengenerator$Decoder$questionDecoder, mlu$fragebogengenerator$Decoder$noteDecoder]));
var mlu$fragebogengenerator$Decoder$decodeElements = function (content) {
	var _n0 = A2(
		elm$json$Json$Decode$decodeString,
		A2(
			elm$json$Json$Decode$at,
			_List_fromArray(
				['elements']),
			elm$json$Json$Decode$list(mlu$fragebogengenerator$Decoder$elementDecoder)),
		content);
	if (_n0.$ === 'Ok') {
		var elements = _n0.a;
		return elements;
	} else {
		var e = _n0.a;
		return _List_Nil;
	}
};
var mlu$fragebogengenerator$Decoder$decodeTitle = function (content) {
	var _n0 = A2(
		elm$json$Json$Decode$decodeString,
		A2(elm$json$Json$Decode$field, 'title', elm$json$Json$Decode$string),
		content);
	if (_n0.$ === 'Ok') {
		var val = _n0.a;
		return val;
	} else {
		var e = _n0.a;
		return '';
	}
};
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var elm$json$Json$Encode$int = _Json_wrap;
var mlu$fragebogengenerator$Encoder$answerEncoder = function (answer) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				elm$json$Json$Encode$int(answer.id)),
				_Utils_Tuple2(
				'text',
				elm$json$Json$Encode$string(answer.text)),
				_Utils_Tuple2(
				'_type',
				elm$json$Json$Encode$string(answer.typ))
			]));
};
var mlu$fragebogengenerator$Encoder$conditionEncoder = function (condition) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'parent_id',
				elm$json$Json$Encode$int(condition.parent_id)),
				_Utils_Tuple2(
				'child_id',
				elm$json$Json$Encode$int(condition.child_id)),
				_Utils_Tuple2(
				'answers',
				A2(elm$json$Json$Encode$list, mlu$fragebogengenerator$Encoder$answerEncoder, condition.answers))
			]));
};
var mlu$fragebogengenerator$Encoder$elementEncoder = function (element) {
	if (element.$ === 'Note') {
		var record = element.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'_type',
					elm$json$Json$Encode$string('Note')),
					_Utils_Tuple2(
					'id',
					elm$json$Json$Encode$int(record.id)),
					_Utils_Tuple2(
					'text',
					elm$json$Json$Encode$string(record.text))
				]));
	} else {
		var record = element.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'_type',
					elm$json$Json$Encode$string('Question')),
					_Utils_Tuple2(
					'id',
					elm$json$Json$Encode$int(record.id)),
					_Utils_Tuple2(
					'text',
					elm$json$Json$Encode$string(record.text)),
					_Utils_Tuple2(
					'hint',
					elm$json$Json$Encode$string(record.hint)),
					_Utils_Tuple2(
					'question_type',
					elm$json$Json$Encode$string(record.typ)),
					_Utils_Tuple2(
					'answers',
					A2(elm$json$Json$Encode$list, mlu$fragebogengenerator$Encoder$answerEncoder, record.answers)),
					_Utils_Tuple2(
					'question_time',
					elm$json$Json$Encode$string(record.questionTime))
				]));
	}
};
var mlu$fragebogengenerator$Encoder$encodeQuestionnaire = function (questionnaire) {
	return A2(
		elm$json$Json$Encode$encode,
		4,
		elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					elm$json$Json$Encode$string(questionnaire.title)),
					_Utils_Tuple2(
					'elements',
					A2(elm$json$Json$Encode$list, mlu$fragebogengenerator$Encoder$elementEncoder, questionnaire.elements)),
					_Utils_Tuple2(
					'conditions',
					A2(elm$json$Json$Encode$list, mlu$fragebogengenerator$Encoder$conditionEncoder, questionnaire.conditions))
				])));
};
var elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			elm$core$Task$perform,
			elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var mlu$fragebogengenerator$Encoder$save = F2(
	function (questionnaire, _export) {
		return A3(elm$file$File$Download$string, questionnaire.title + '.json', 'application/json', _export);
	});
var mlu$fragebogengenerator$Model$JsonLoaded = function (a) {
	return {$: 'JsonLoaded', a: a};
};
var mlu$fragebogengenerator$Model$JsonSelected = function (a) {
	return {$: 'JsonSelected', a: a};
};
var mlu$fragebogengenerator$Model$NotDone = {$: 'NotDone'};
var mlu$fragebogengenerator$Model$ValidationOK = {$: 'ValidationOK'};
var mlu$fragebogengenerator$Model$Error = function (a) {
	return {$: 'Error', a: a};
};
var mlu$fragebogengenerator$Model$isValidEditTime = function (editTime) {
	return !((elm$core$String$length(editTime) !== 5) && elm$core$String$length(editTime));
};
var mlu$fragebogengenerator$Model$isValidViewingTime = function (viewingTime) {
	return !((elm$core$String$length(viewingTime) !== 16) && elm$core$String$length(viewingTime));
};
var mlu$fragebogengenerator$Model$validate = function (model) {
	return (!mlu$fragebogengenerator$Model$isValidEditTime(model.inputEditTime)) ? mlu$fragebogengenerator$Model$Error('Die Bearbeitungszeit muss das Format HH:MM haben') : ((!mlu$fragebogengenerator$Model$isValidViewingTime(model.inputViewingTimeBegin)) ? mlu$fragebogengenerator$Model$Error('Die Zeiten müssen das Format DD:MM:YYYY:HH:MM haben') : ((!mlu$fragebogengenerator$Model$isValidViewingTime(model.inputViewingTimeEnd)) ? mlu$fragebogengenerator$Model$Error('Die Zeiten müssen das Format DD:MM:YYYY:HH:MM haben') : mlu$fragebogengenerator$Model$ValidationOK));
};
var mlu$fragebogengenerator$Model$isValidQuestionTime = function (questionTime) {
	return !((elm$core$String$length(questionTime) !== 8) && elm$core$String$length(questionTime));
};
var mlu$fragebogengenerator$Model$validateQuestion = function (questionTime) {
	return (!mlu$fragebogengenerator$Model$isValidQuestionTime(questionTime)) ? mlu$fragebogengenerator$Model$Error('Die Zeiten müssen das Format HH:MM:SS haben') : mlu$fragebogengenerator$Model$ValidationOK;
};
var mlu$fragebogengenerator$QElement$deleteAnswerFromItem = F2(
	function (answer, element) {
		if (element.$ === 'Question') {
			var record = element.a;
			return mlu$fragebogengenerator$QElement$Question(
				_Utils_update(
					record,
					{
						answers: A2(
							elm$core$List$partition,
							function (e) {
								return !_Utils_eq(e, answer);
							},
							record.answers).a
					}));
		} else {
			var record = element.a;
			return mlu$fragebogengenerator$QElement$Note(record);
		}
	});
var mlu$fragebogengenerator$QElement$deleteItemFrom = F2(
	function (element, list) {
		return A2(
			elm$core$List$partition,
			function (e) {
				return !_Utils_eq(e, element);
			},
			list).a;
	});
var mlu$fragebogengenerator$QElement$getAntworten = function (element) {
	if (element.$ === 'Question') {
		var record = element.a;
		return record.answers;
	} else {
		var record = element.a;
		return _List_Nil;
	}
};
var mlu$fragebogengenerator$QElement$getID = function (element) {
	if (element.$ === 'Question') {
		var record = element.a;
		return record.id;
	} else {
		var record = element.a;
		return record.id;
	}
};
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2(elm$core$List$take, n, xs),
			A2(elm$core$List$drop, n, xs));
	});
var elm_community$list_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var elm_community$list_extra$List$Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_Utils_eq(index1, index2) || (index1 < 0)) {
				return l;
			} else {
				if (_Utils_cmp(index1, index2) > 0) {
					var $temp$index1 = index2,
						$temp$index2 = index1,
						$temp$l = l;
					index1 = $temp$index1;
					index2 = $temp$index2;
					l = $temp$l;
					continue swapAt;
				} else {
					var _n0 = A2(elm_community$list_extra$List$Extra$splitAt, index1, l);
					var part1 = _n0.a;
					var tail1 = _n0.b;
					var _n1 = A2(elm_community$list_extra$List$Extra$splitAt, index2 - index1, tail1);
					var head2 = _n1.a;
					var tail2 = _n1.b;
					var _n2 = _Utils_Tuple2(
						elm_community$list_extra$List$Extra$uncons(head2),
						elm_community$list_extra$List$Extra$uncons(tail2));
					if ((_n2.a.$ === 'Just') && (_n2.b.$ === 'Just')) {
						var _n3 = _n2.a.a;
						var value1 = _n3.a;
						var part2 = _n3.b;
						var _n4 = _n2.b.a;
						var value2 = _n4.a;
						var part3 = _n4.b;
						return elm$core$List$concat(
							_List_fromArray(
								[
									part1,
									A2(elm$core$List$cons, value2, part2),
									A2(elm$core$List$cons, value1, part3)
								]));
					} else {
						return l;
					}
				}
			}
		}
	});
var mlu$fragebogengenerator$QElement$updateAnsID = F3(
	function (old, _new, answer) {
		return _Utils_eq(answer.id, old) ? _Utils_update(
			answer,
			{id: _new}) : (_Utils_eq(answer.id, _new) ? _Utils_update(
			answer,
			{id: old}) : answer);
	});
var mlu$fragebogengenerator$QElement$putAnswerDown = F2(
	function (newElement, answer) {
		if (newElement.$ === 'Note') {
			var record = newElement.a;
			return mlu$fragebogengenerator$QElement$Note(record);
		} else {
			var record = newElement.a;
			return mlu$fragebogengenerator$QElement$Question(
				_Utils_update(
					record,
					{
						answers: A3(
							elm_community$list_extra$List$Extra$swapAt,
							answer.id,
							answer.id + 1,
							A2(
								elm$core$List$map,
								A2(mlu$fragebogengenerator$QElement$updateAnsID, answer.id, answer.id + 1),
								record.answers))
					}));
		}
	});
var mlu$fragebogengenerator$QElement$putAnswerUp = F2(
	function (newElement, answer) {
		if (newElement.$ === 'Note') {
			var record = newElement.a;
			return mlu$fragebogengenerator$QElement$Note(record);
		} else {
			var record = newElement.a;
			return mlu$fragebogengenerator$QElement$Question(
				_Utils_update(
					record,
					{
						answers: A3(
							elm_community$list_extra$List$Extra$swapAt,
							answer.id,
							answer.id - 1,
							A2(
								elm$core$List$map,
								A2(mlu$fragebogengenerator$QElement$updateAnsID, answer.id, answer.id - 1),
								record.answers))
					}));
		}
	});
var mlu$fragebogengenerator$QElement$setNewID = F2(
	function (element, _new) {
		if (element.$ === 'Note') {
			var record = element.a;
			return mlu$fragebogengenerator$QElement$Note(
				_Utils_update(
					record,
					{id: _new}));
		} else {
			var record = element.a;
			return mlu$fragebogengenerator$QElement$Question(
				_Utils_update(
					record,
					{id: _new}));
		}
	});
var mlu$fragebogengenerator$QElement$updateID = F3(
	function (old, _new, element) {
		return _Utils_eq(
			mlu$fragebogengenerator$QElement$getID(element),
			old) ? A2(mlu$fragebogengenerator$QElement$setNewID, element, _new) : (_Utils_eq(
			mlu$fragebogengenerator$QElement$getID(element),
			_new) ? A2(mlu$fragebogengenerator$QElement$setNewID, element, old) : element);
	});
var mlu$fragebogengenerator$QElement$putElementDown = F2(
	function (list, element) {
		return A3(
			elm_community$list_extra$List$Extra$swapAt,
			mlu$fragebogengenerator$QElement$getID(element),
			mlu$fragebogengenerator$QElement$getID(element) + 1,
			A2(
				elm$core$List$map,
				A2(
					mlu$fragebogengenerator$QElement$updateID,
					mlu$fragebogengenerator$QElement$getID(element),
					mlu$fragebogengenerator$QElement$getID(element) + 1),
				list));
	});
var mlu$fragebogengenerator$QElement$putElementUp = F2(
	function (list, element) {
		return A3(
			elm_community$list_extra$List$Extra$swapAt,
			mlu$fragebogengenerator$QElement$getID(element),
			mlu$fragebogengenerator$QElement$getID(element) - 1,
			A2(
				elm$core$List$map,
				A2(
					mlu$fragebogengenerator$QElement$updateID,
					mlu$fragebogengenerator$QElement$getID(element),
					mlu$fragebogengenerator$QElement$getID(element) - 1),
				list));
	});
var mlu$fragebogengenerator$QElement$updateElement = F2(
	function (elementToUpdate, element) {
		return _Utils_eq(
			mlu$fragebogengenerator$QElement$getID(element),
			mlu$fragebogengenerator$QElement$getID(elementToUpdate)) ? elementToUpdate : element;
	});
var mlu$fragebogengenerator$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'ChangeInputQuestionnaireTitle':
				var newTitle = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{inputTitle: newTitle}),
					elm$core$Platform$Cmd$none);
			case 'ChangeEditTime':
				var newTime = msg.a;
				var changedModel = _Utils_update(
					model,
					{inputEditTime: newTime});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputEditTime: newTime,
							validationResult: mlu$fragebogengenerator$Model$validate(changedModel)
						}),
					elm$core$Platform$Cmd$none);
			case 'ChangeViewingTimeBegin':
				var newTime = msg.a;
				var changedModel = _Utils_update(
					model,
					{inputViewingTimeBegin: newTime});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputViewingTimeBegin: newTime,
							validationResult: mlu$fragebogengenerator$Model$validate(changedModel)
						}),
					elm$core$Platform$Cmd$none);
			case 'ChangeViewingTimeEnd':
				var newTime = msg.a;
				var changedModel = _Utils_update(
					model,
					{inputViewingTimeEnd: newTime});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputViewingTimeEnd: newTime,
							validationResult: mlu$fragebogengenerator$Model$validate(changedModel)
						}),
					elm$core$Platform$Cmd$none);
			case 'ChangeQuestionOrNoteText':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedRecord = function (rec) {
					return _Utils_update(
						rec,
						{text: string});
				};
				var changedQuestionnaire = function () {
					var _n1 = oldQuestionnaire.newElement;
					if (_n1.$ === 'Question') {
						var record = _n1.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									changedRecord(record))
							});
					} else {
						var record = _n1.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Note(
									changedRecord(record))
							});
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'ChangeQuestionNewAnswer':
				var newAnswer = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n2 = oldQuestionnaire.newElement;
					if (_n2.$ === 'Question') {
						var record = _n2.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: _Utils_ap(
												record.answers,
												_List_fromArray(
													[newAnswer]))
										}))
							});
					} else {
						var record = _n2.a;
						return oldQuestionnaire;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'ChangeQuestionNote':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n3 = oldQuestionnaire.newElement;
					if (_n3.$ === 'Question') {
						var record = _n3.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{hint: string}))
							});
					} else {
						var record = _n3.a;
						return oldQuestionnaire;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'ChangeQuestionType':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n4 = oldQuestionnaire.newElement;
					if (_n4.$ === 'Question') {
						var record = _n4.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newElement: ((string === 'Single Choice') || (string === 'Multiple Choice')) ? mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{typ: string})) : mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: mlu$fragebogengenerator$Answer$getYesNoAnswers(string),
											typ: string
										}))
							});
					} else {
						var record = _n4.a;
						return oldQuestionnaire;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'ChangeQuestionTime':
				var newTime = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputQuestionTime: newTime,
							questionValidationResult: mlu$fragebogengenerator$Model$validateQuestion(newTime)
						}),
					elm$core$Platform$Cmd$none);
			case 'ChangeAnswerText':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						newAnswer: A3(mlu$fragebogengenerator$Answer$Answer, oldQuestionnaire.newAnswer.id, string, oldQuestionnaire.newAnswer.typ)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'ChangeAnswerType':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						newAnswer: A3(mlu$fragebogengenerator$Answer$Answer, oldQuestionnaire.newAnswer.id, oldQuestionnaire.newAnswer.text, string)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'DateTimePickerChanged':
				var newState = msg.a;
				var newValue = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newState, value: newValue}),
					elm$core$Platform$Cmd$none);
			case 'ViewOrClose':
				var modalType = msg.a;
				switch (modalType.$) {
					case 'TitleModal':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{showTitleModal: !model.showTitleModal}),
							elm$core$Platform$Cmd$none);
					case 'ViewingTimeModal':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{showViewingTimeModal: !model.showViewingTimeModal}),
							elm$core$Platform$Cmd$none);
					case 'EditTimeModal':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{showEditTimeModal: !model.showEditTimeModal}),
							elm$core$Platform$Cmd$none);
					case 'NewNoteModal':
						var oldQuestionnaire = model.questionnaire;
						var changedQuestionnaire = (!model.showNewNoteModal) ? _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Note(
									{
										id: elm$core$List$length(oldQuestionnaire.elements),
										text: ''
									})
							}) : oldQuestionnaire;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{questionnaire: changedQuestionnaire, showNewNoteModal: !model.showNewNoteModal}),
							elm$core$Platform$Cmd$none);
					case 'QuestionModal':
						var oldQuestionnaire = model.questionnaire;
						var changedQuestionnaire = (!model.showNewQuestionModal) ? _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									{
										answers: _List_Nil,
										hint: '',
										id: elm$core$List$length(oldQuestionnaire.elements),
										questionTime: '',
										text: '',
										typ: ''
									})
							}) : oldQuestionnaire;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{inputQuestionTime: '', questionValidationResult: mlu$fragebogengenerator$Model$NotDone, questionnaire: changedQuestionnaire, showNewQuestionModal: !model.showNewQuestionModal}),
							elm$core$Platform$Cmd$none);
					case 'AnswerModal':
						var oldQuestionnaire = model.questionnaire;
						var changedQuestionnaire = (!model.showNewAnswerModal) ? _Utils_update(
							oldQuestionnaire,
							{
								newAnswer: {
									id: elm$core$List$length(
										mlu$fragebogengenerator$QElement$getAntworten(oldQuestionnaire.newElement)),
									text: '',
									typ: ''
								}
							}) : oldQuestionnaire;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{questionnaire: changedQuestionnaire, showNewAnswerModal: !model.showNewAnswerModal}),
							elm$core$Platform$Cmd$none);
					case 'ConditionModal1':
						var oldQuestionnaire = model.questionnaire;
						var changedQuestionnaire = oldQuestionnaire;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{questionnaire: changedQuestionnaire, showNewConditionModal1: !model.showNewConditionModal1}),
							elm$core$Platform$Cmd$none);
					default:
						var oldQuestionnaire = model.questionnaire;
						var changedQuestionnaire = oldQuestionnaire;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{questionnaire: changedQuestionnaire, showNewConditionModal2: !model.showNewConditionModal2}),
							elm$core$Platform$Cmd$none);
				}
			case 'ChangeInputParentId':
				var parent_id = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputParentId: function () {
								var _n6 = elm$core$String$toInt(parent_id);
								if (_n6.$ === 'Just') {
									var a = _n6.a;
									return a;
								} else {
									return -1;
								}
							}()
						}),
					elm$core$Platform$Cmd$none);
			case 'ChangeInputChildId':
				var child_id = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputChildId: function () {
								var _n7 = elm$core$String$toInt(child_id);
								if (_n7.$ === 'Just') {
									var a = _n7.a;
									return a;
								} else {
									return -1;
								}
							}()
						}),
					elm$core$Platform$Cmd$none);
			case 'AddCondition':
				var parent = model.inputParentId;
				var child = model.inputChildId;
				return ((!_Utils_eq(parent, -1)) && (!_Utils_eq(child, -1))) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{
							newCondition: A3(mlu$fragebogengenerator$Condition$setParentChildInCondition, parent, child, model.newCondition)
						}),
					elm$core$Platform$Cmd$none) : A2(
					elm$core$Debug$log,
					'Keine ausgewählt',
					_Utils_Tuple2(
						_Utils_update(
							model,
							{
								newCondition: A2(mlu$fragebogengenerator$Condition$setValid, model.newCondition, false)
							}),
						elm$core$Platform$Cmd$none));
			case 'AddConditionAnswer':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n8 = elm$core$String$toInt(oldQuestionnaire.newAnswerID_Condition);
					if (_n8.$ === 'Nothing') {
						return oldQuestionnaire;
					} else {
						var id = _n8.a;
						return _Utils_update(
							oldQuestionnaire,
							{
								newCondition: A3(mlu$fragebogengenerator$Condition$addAnswerOfQuestionToCondition, id, oldQuestionnaire.newElement, oldQuestionnaire.newCondition)
							});
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'AddAnswerToNewCondition':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{newAnswerID_Condition: string});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'SetQuestionnaireTitle':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{title: model.inputTitle});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{inputTitle: '', questionnaire: changedQuestionnaire, showTitleModal: !model.showTitleModal}),
					elm$core$Platform$Cmd$none);
			case 'SetPolarAnswers':
				var string = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n9 = oldQuestionnaire.newElement;
					if (_n9.$ === 'Question') {
						var record = _n9.a;
						return (record.typ === 'Skaliert unipolar') ? _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: mlu$fragebogengenerator$Answer$getUnipolarAnswers(string)
										}))
							}) : _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: mlu$fragebogengenerator$Answer$getBipolarAnswers(string)
										}))
							});
					} else {
						var record = _n9.a;
						return oldQuestionnaire;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'SetNote':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = (!model.editQElement) ? _Utils_update(
					oldQuestionnaire,
					{
						elements: A2(
							elm$core$List$append,
							oldQuestionnaire.elements,
							_List_fromArray(
								[oldQuestionnaire.newElement]))
					}) : _Utils_update(
					oldQuestionnaire,
					{
						elements: A2(
							elm$core$List$map,
							function (e) {
								return A2(mlu$fragebogengenerator$QElement$updateElement, oldQuestionnaire.newElement, e);
							},
							oldQuestionnaire.elements)
					});
				return (!model.editQElement) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire, showNewNoteModal: false}),
					elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{editQElement: false, questionnaire: changedQuestionnaire, showNewNoteModal: false}),
					elm$core$Platform$Cmd$none);
			case 'SetQuestion':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = (!model.editQElement) ? _Utils_update(
					oldQuestionnaire,
					{
						conditions: oldQuestionnaire.newCondition.isValid ? A2(
							elm$core$Debug$log,
							'true',
							A2(
								elm$core$List$append,
								oldQuestionnaire.conditions,
								_List_fromArray(
									[oldQuestionnaire.newCondition]))) : A4(elm$core$Debug$log, 'false', mlu$fragebogengenerator$Condition$removeConditionFromCondList, oldQuestionnaire.newCondition, oldQuestionnaire.conditions),
						elements: A2(
							elm$core$List$append,
							oldQuestionnaire.elements,
							_List_fromArray(
								[oldQuestionnaire.newElement])),
						newCondition: mlu$fragebogengenerator$Condition$initCondition
					}) : _Utils_update(
					oldQuestionnaire,
					{
						conditions: oldQuestionnaire.newCondition.isValid ? A4(
							elm$core$Debug$log,
							'true',
							elm$core$List$map,
							function (e) {
								return A2(mlu$fragebogengenerator$Condition$updateCondition, oldQuestionnaire.newCondition, e);
							},
							oldQuestionnaire.conditions) : A4(elm$core$Debug$log, 'false', mlu$fragebogengenerator$Condition$removeConditionFromCondList, oldQuestionnaire.newCondition, oldQuestionnaire.conditions),
						elements: A2(
							elm$core$List$map,
							function (e) {
								return A2(mlu$fragebogengenerator$QElement$updateElement, oldQuestionnaire.newElement, e);
							},
							oldQuestionnaire.elements)
					});
				return (!model.editQElement) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire, showNewQuestionModal: false}),
					elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{editQElement: false, questionnaire: changedQuestionnaire, showNewQuestionModal: false}),
					elm$core$Platform$Cmd$none);
			case 'SetConditions':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						conditions: A2(
							elm$core$List$append,
							oldQuestionnaire.conditions,
							_List_fromArray(
								[oldQuestionnaire.newCondition]))
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire, showNewConditionModal2: false}),
					elm$core$Platform$Cmd$none);
			case 'SetAnswer':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = function () {
					var _n10 = oldQuestionnaire.newElement;
					if (_n10.$ === 'Question') {
						var record = _n10.a;
						return ((!model.editAnswer) && (oldQuestionnaire.newAnswer.typ !== '')) ? _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: _Utils_ap(
												record.answers,
												_List_fromArray(
													[oldQuestionnaire.newAnswer]))
										}))
							}) : ((oldQuestionnaire.newAnswer.typ === '') ? oldQuestionnaire : _Utils_update(
							oldQuestionnaire,
							{
								newElement: mlu$fragebogengenerator$QElement$Question(
									_Utils_update(
										record,
										{
											answers: A2(
												elm$core$List$map,
												function (e) {
													return A2(mlu$fragebogengenerator$Answer$update, oldQuestionnaire.newAnswer, e);
												},
												record.answers)
										}))
							}));
					} else {
						var record = _n10.a;
						return oldQuestionnaire;
					}
				}();
				return ((!model.editAnswer) && (oldQuestionnaire.newAnswer.typ !== '')) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire, showNewAnswerModal: false}),
					elm$core$Platform$Cmd$none) : ((oldQuestionnaire.newAnswer.typ === '') ? _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{editAnswer: false, questionnaire: changedQuestionnaire, showNewAnswerModal: false}),
					elm$core$Platform$Cmd$none));
			case 'EditAnswer':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{newAnswer: element});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{editAnswer: true, questionnaire: changedQuestionnaire, showNewAnswerModal: true}),
					elm$core$Platform$Cmd$none);
			case 'EditQuestion':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						newCondition: A2(
							mlu$fragebogengenerator$Condition$getConditionWithParentID,
							oldQuestionnaire.conditions,
							mlu$fragebogengenerator$QElement$getID(element)),
						newElement: element
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{editQElement: true, questionnaire: changedQuestionnaire, showNewQuestionModal: true}),
					elm$core$Platform$Cmd$none);
			case 'EditNote':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{newElement: element});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{editQElement: true, questionnaire: changedQuestionnaire, showNewNoteModal: true}),
					elm$core$Platform$Cmd$none);
			case 'EditQuestionnaire':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{editQuestionnaire: true, upload: false}),
					elm$core$Platform$Cmd$none);
			case 'PutDownEl':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = (!_Utils_eq(
					mlu$fragebogengenerator$QElement$getID(element),
					elm$core$List$length(oldQuestionnaire.elements) - 1)) ? _Utils_update(
					oldQuestionnaire,
					{
						conditions: A3(
							mlu$fragebogengenerator$Condition$updateIDsInCondition,
							oldQuestionnaire.conditions,
							mlu$fragebogengenerator$QElement$getID(element),
							mlu$fragebogengenerator$QElement$getID(element) + 1),
						elements: A2(mlu$fragebogengenerator$QElement$putElementDown, oldQuestionnaire.elements, element)
					}) : oldQuestionnaire;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'PutUpEl':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = mlu$fragebogengenerator$QElement$getID(element) ? _Utils_update(
					oldQuestionnaire,
					{
						conditions: A3(
							mlu$fragebogengenerator$Condition$updateIDsInCondition,
							oldQuestionnaire.conditions,
							mlu$fragebogengenerator$QElement$getID(element),
							mlu$fragebogengenerator$QElement$getID(element) - 1),
						elements: A2(mlu$fragebogengenerator$QElement$putElementUp, oldQuestionnaire.elements, element)
					}) : oldQuestionnaire;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'PutUpAns':
				var answer = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = answer.id ? _Utils_update(
					oldQuestionnaire,
					{
						conditions: A3(mlu$fragebogengenerator$Condition$updateConditionAnswers, oldQuestionnaire.conditions, answer.id, answer.id - 1),
						newElement: A2(mlu$fragebogengenerator$QElement$putAnswerUp, oldQuestionnaire.newElement, answer)
					}) : oldQuestionnaire;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'PutDownAns':
				var answer = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = (!_Utils_eq(
					answer.id,
					elm$core$List$length(
						mlu$fragebogengenerator$QElement$getAntworten(oldQuestionnaire.newElement)) - 1)) ? _Utils_update(
					oldQuestionnaire,
					{
						newElement: A2(mlu$fragebogengenerator$QElement$putAnswerDown, oldQuestionnaire.newElement, answer)
					}) : oldQuestionnaire;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'DeleteItem':
				var element = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						conditions: A2(
							mlu$fragebogengenerator$Condition$deleteConditionWithElement,
							oldQuestionnaire.conditions,
							mlu$fragebogengenerator$QElement$getID(element)),
						elements: A2(mlu$fragebogengenerator$QElement$deleteItemFrom, element, oldQuestionnaire.elements)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'DeleteAnswer':
				var answer = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						conditions: A2(
							elm$core$List$map,
							mlu$fragebogengenerator$Condition$deleteAnswerInCondition(answer.id),
							oldQuestionnaire.conditions),
						newElement: A2(mlu$fragebogengenerator$QElement$deleteAnswerFromItem, answer, oldQuestionnaire.newElement)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire}),
					elm$core$Platform$Cmd$none);
			case 'Submit':
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{editTime: model.inputEditTime, viewingTimeBegin: model.inputViewingTimeBegin, viewingTimeEnd: model.inputViewingTimeEnd});
				return _Utils_eq(
					mlu$fragebogengenerator$Model$validate(model),
					mlu$fragebogengenerator$Model$ValidationOK) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{questionnaire: changedQuestionnaire, showEditTimeModal: false, showViewingTimeModal: false, validationResult: mlu$fragebogengenerator$Model$ValidationOK}),
					elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{
							inputEditTime: '',
							inputViewingTimeBegin: '',
							inputViewingTimeEnd: '',
							validationResult: mlu$fragebogengenerator$Model$validate(model)
						}),
					elm$core$Platform$Cmd$none);
			case 'EnterUpload':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{upload: true}),
					elm$core$Platform$Cmd$none);
			case 'LeaveOrEnterUpload':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{upload: !model.upload}),
					elm$core$Platform$Cmd$none);
			case 'JsonRequested':
				return _Utils_Tuple2(
					model,
					A2(
						elm$file$File$Select$file,
						_List_fromArray(
							['text/json']),
						mlu$fragebogengenerator$Model$JsonSelected));
			case 'JsonSelected':
				var file = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						elm$core$Task$perform,
						mlu$fragebogengenerator$Model$JsonLoaded,
						elm$file$File$toString(file)));
			case 'JsonLoaded':
				var content = msg.a;
				var oldQuestionnaire = model.questionnaire;
				var changedQuestionnaire = _Utils_update(
					oldQuestionnaire,
					{
						elements: mlu$fragebogengenerator$Decoder$decodeElements(content),
						title: mlu$fragebogengenerator$Decoder$decodeTitle(content)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{editQuestionnaire: true, questionnaire: changedQuestionnaire, upload: false}),
					elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					model,
					A2(
						mlu$fragebogengenerator$Encoder$save,
						model.questionnaire,
						mlu$fragebogengenerator$Encoder$encodeQuestionnaire(model.questionnaire)));
		}
	});
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var mlu$fragebogengenerator$Model$ConditionModal1 = {$: 'ConditionModal1'};
var mlu$fragebogengenerator$Model$DownloadQuestionnaire = {$: 'DownloadQuestionnaire'};
var mlu$fragebogengenerator$Model$NewNoteModal = {$: 'NewNoteModal'};
var mlu$fragebogengenerator$Model$QuestionModal = {$: 'QuestionModal'};
var mlu$fragebogengenerator$Model$ViewOrClose = function (a) {
	return {$: 'ViewOrClose', a: a};
};
var mlu$fragebogengenerator$Edit$showCreateQuestionOrNoteButtons = function (questionnaire) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container is-fluid divButtons')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('qnButton'),
						A2(elm$html$Html$Attributes$style, 'margin-right', '10px'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$QuestionModal))
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Neue Frage')
					])),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('qnButton'),
						A2(elm$html$Html$Attributes$style, 'margin-right', '10px'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$NewNoteModal))
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Neue Anmerkung')
					])),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('qnButton'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ConditionModal1))
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Bedingungen')
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('qnButton'),
						elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$DownloadQuestionnaire)
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Download')
					]))
			]));
};
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$i = _VirtualDom_node('i');
var elm$html$Html$section = _VirtualDom_node('section');
var mlu$fragebogengenerator$Model$TitleModal = {$: 'TitleModal'};
var mlu$fragebogengenerator$Edit$showHeroQuestionnaireTitle = function (questionnaire) {
	return A2(
		elm$html$Html$section,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('hero is-info')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('hero-body')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('container is-fluid')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$h1,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('title')
									]),
								_List_fromArray(
									[
										elm$html$Html$text(questionnaire.title),
										A2(
										elm$html$Html$i,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('fas fa-cog symbol'),
												A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
												elm$html$Html$Events$onClick(
												mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$TitleModal))
											]),
										_List_Nil)
									]))
							]))
					]))
			]));
};
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$tbody = _VirtualDom_node('tbody');
var elm$html$Html$thead = _VirtualDom_node('thead');
var elm$html$Html$td = _VirtualDom_node('td');
var elm$html$Html$tr = _VirtualDom_node('tr');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var mlu$fragebogengenerator$Model$DeleteItem = function (a) {
	return {$: 'DeleteItem', a: a};
};
var mlu$fragebogengenerator$Model$EditNote = function (a) {
	return {$: 'EditNote', a: a};
};
var mlu$fragebogengenerator$Model$EditQuestion = function (a) {
	return {$: 'EditQuestion', a: a};
};
var mlu$fragebogengenerator$Model$PutDownEl = function (a) {
	return {$: 'PutDownEl', a: a};
};
var mlu$fragebogengenerator$Model$PutUpEl = function (a) {
	return {$: 'PutUpEl', a: a};
};
var mlu$fragebogengenerator$Edit$getQuestionTable = F2(
	function (index, element) {
		if (element.$ === 'Note') {
			var a = element.a;
			return A2(
				elm$html$Html$tr,
				_List_fromArray(
					[
						elm$html$Html$Attributes$id(
						elm$core$String$fromInt(index))
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '5%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								elm$core$String$fromInt(index))
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '40%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(a.text)
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '25%')
							]),
						_List_Nil),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '20%')
							]),
						_List_Nil),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '10%')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-arrow-up'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$PutUpEl(element))
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-arrow-down'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$PutDownEl(element)),
										A2(elm$html$Html$Attributes$style, 'margin-left', '1em'),
										A2(elm$html$Html$Attributes$style, 'margin-right', '1em')
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-cog'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$EditNote(element)),
										A2(elm$html$Html$Attributes$style, 'margin-right', '1em')
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-trash-alt'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$DeleteItem(element))
									]),
								_List_Nil)
							]))
					]));
		} else {
			var f = element.a;
			return A2(
				elm$html$Html$tr,
				_List_fromArray(
					[
						elm$html$Html$Attributes$id(
						elm$core$String$fromInt(index))
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '5%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								elm$core$String$fromInt(index))
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '40%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(f.text)
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '25%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(f.hint)
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '20%')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(f.typ)
							])),
						A2(
						elm$html$Html$td,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '10%')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-arrow-up'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$PutUpEl(element))
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-arrow-down'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$PutDownEl(element)),
										A2(elm$html$Html$Attributes$style, 'margin-left', '1em'),
										A2(elm$html$Html$Attributes$style, 'margin-right', '1em')
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-cog'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$EditQuestion(element)),
										A2(elm$html$Html$Attributes$style, 'margin-right', '1em')
									]),
								_List_Nil),
								A2(
								elm$html$Html$i,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('fas fa-trash-alt'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$DeleteItem(element))
									]),
								_List_Nil)
							]))
					]));
		}
	});
var mlu$fragebogengenerator$Edit$questionsTable = function (questionnaire) {
	return A2(elm$core$List$indexedMap, mlu$fragebogengenerator$Edit$getQuestionTable, questionnaire.elements);
};
var elm$html$Html$th = _VirtualDom_node('th');
var mlu$fragebogengenerator$Edit$tableHead_questions = A2(
	elm$html$Html$tr,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			elm$html$Html$th,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', '5%')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('ID')
				])),
			A2(
			elm$html$Html$th,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', '40%')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Fragetext')
				])),
			A2(
			elm$html$Html$th,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', '25%')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Hinweis')
				])),
			A2(
			elm$html$Html$th,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', '20%')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Typ')
				])),
			A2(
			elm$html$Html$th,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', '10%')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Aktion')
				]))
		]));
var mlu$fragebogengenerator$Edit$showQuestionList = function (questionnaire) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('box container is-fluid questionList'),
				A2(elm$html$Html$Attributes$style, 'flex-basis', '80%'),
				A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
				A2(elm$html$Html$Attributes$style, 'height', '60vh'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '2em'),
				A2(elm$html$Html$Attributes$style, 'margin-bottom', '2em')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$table,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('table is-striped')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$thead,
						_List_Nil,
						_List_fromArray(
							[mlu$fragebogengenerator$Edit$tableHead_questions])),
						A2(
						elm$html$Html$tbody,
						_List_Nil,
						mlu$fragebogengenerator$Edit$questionsTable(questionnaire))
					]))
			]));
};
var mlu$fragebogengenerator$Model$EditTimeModal = {$: 'EditTimeModal'};
var mlu$fragebogengenerator$Model$ViewingTimeModal = {$: 'ViewingTimeModal'};
var mlu$fragebogengenerator$Questionnaire$getEditTime = function (questionnaire) {
	return (questionnaire.viewingTimeBegin === '') ? 'unbegrenzt' : ('Von ' + (questionnaire.viewingTimeBegin + (' Bis ' + questionnaire.viewingTimeEnd)));
};
var mlu$fragebogengenerator$Questionnaire$getViewingTime = function (questionnaire) {
	return (questionnaire.editTime === '') ? 'unbegrenzt' : questionnaire.editTime;
};
var mlu$fragebogengenerator$Edit$showTimes = function (questionnaire) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container is-fluid'),
				A2(elm$html$Html$Attributes$style, 'margin-bottom', '10px')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(
				'Bearbeitungszeit: ' + mlu$fragebogengenerator$Questionnaire$getViewingTime(questionnaire)),
				A2(
				elm$html$Html$i,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('fas fa-cog symbol'),
						A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$EditTimeModal))
					]),
				_List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text(
				'Erscheinungszeit: ' + mlu$fragebogengenerator$Questionnaire$getEditTime(questionnaire)),
				A2(
				elm$html$Html$i,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('fas fa-cog symbol'),
						A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ViewingTimeModal))
					]),
				_List_Nil)
			]));
};
var mlu$fragebogengenerator$Edit$viewConditions = function (questionnaire) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(
			elm$core$List$map,
			function (c) {
				return elm$html$Html$text(
					'(' + (elm$core$String$fromInt(c.parent_id) + (',' + (elm$core$String$fromInt(c.child_id) + ')'))));
			},
			questionnaire.conditions));
};
var elm$core$Basics$ge = _Utils_ge;
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryAmPm = function (hour) {
	switch (hour) {
		case 12:
			return 'PM';
		case 0:
			return 'AM';
		default:
			return (hour >= 12) ? 'PM' : 'AM';
	}
};
var elm$core$Basics$modBy = _Basics_modBy;
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryHour = function (hour) {
	switch (hour) {
		case 12:
			return 12;
		case 0:
			return 12;
		default:
			return A2(elm$core$Basics$modBy, 12, hour);
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator = {$: 'HourIndicator'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState = function (a) {
	return {$: 'InternalState', a: a};
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$datePickerFocused = F4(
	function (pickerType, config, stateValue, currentDate) {
		var updatedTitleDate = function () {
			if (currentDate.$ === 'Nothing') {
				return stateValue.titleDate;
			} else {
				return currentDate;
			}
		}();
		var updateTime = function (time) {
			return _Utils_update(
				time,
				{
					amPm: A2(
						elm$core$Maybe$map,
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.hour;
							},
							NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryAmPm),
						currentDate),
					hour: A2(
						elm$core$Maybe$map,
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.hour;
							},
							NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryHour),
						currentDate),
					minute: A2(
						elm$core$Maybe$map,
						function ($) {
							return $.minute;
						},
						currentDate)
				});
		};
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{
						activeTimeIndicator: function () {
							if (pickerType.$ === 'TimeType') {
								return elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator);
							} else {
								return elm$core$Maybe$Nothing;
							}
						}(),
						date: currentDate,
						event: 'onFocus',
						forceClose: false,
						inputFocused: true,
						time: updateTime(stateValue.time),
						titleDate: updatedTitleDate
					})),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$isLeapYear = function (y) {
	return ((!A2(elm$core$Basics$modBy, 4, y)) && A2(elm$core$Basics$modBy, 100, y)) || (!A2(elm$core$Basics$modBy, 400, y));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$daysInMonth = F2(
	function (year, month) {
		switch (month.$) {
			case 'Feb':
				return NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$isLeapYear(year) ? 29 : 28;
			case 'Sep':
				return 30;
			case 'Apr':
				return 30;
			case 'Jun':
				return 30;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts = F5(
	function (year, month, day, hour, minute) {
		return {day: day, hour: hour, minute: minute, month: month, year: year};
	});
var elm$time$Time$Apr = {$: 'Apr'};
var elm$time$Time$Aug = {$: 'Aug'};
var elm$time$Time$Dec = {$: 'Dec'};
var elm$time$Time$Feb = {$: 'Feb'};
var elm$time$Time$Jan = {$: 'Jan'};
var elm$time$Time$Jul = {$: 'Jul'};
var elm$time$Time$Jun = {$: 'Jun'};
var elm$time$Time$Mar = {$: 'Mar'};
var elm$time$Time$May = {$: 'May'};
var elm$time$Time$Nov = {$: 'Nov'};
var elm$time$Time$Oct = {$: 'Oct'};
var elm$time$Time$Sep = {$: 'Sep'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$intToMonth = function (month) {
	switch (month) {
		case 1:
			return elm$time$Time$Jan;
		case 2:
			return elm$time$Time$Feb;
		case 3:
			return elm$time$Time$Mar;
		case 4:
			return elm$time$Time$Apr;
		case 5:
			return elm$time$Time$May;
		case 6:
			return elm$time$Time$Jun;
		case 7:
			return elm$time$Time$Jul;
		case 8:
			return elm$time$Time$Aug;
		case 9:
			return elm$time$Time$Sep;
		case 10:
			return elm$time$Time$Oct;
		case 11:
			return elm$time$Time$Nov;
		default:
			return elm$time$Time$Dec;
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths = F2(
	function (n, date) {
		var wholeMonths = (((12 * (date.year - 1)) + NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt(date.month)) - 1) + n;
		var y = ((wholeMonths / 12) | 0) + 1;
		var m = NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$intToMonth(
			A2(elm$core$Basics$modBy, 12, wholeMonths) + 1);
		return A5(
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts,
			y,
			m,
			A2(
				elm$core$Basics$min,
				date.day,
				A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$daysInMonth, y, m)),
			date.hour,
			date.minute);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue = function (state) {
	var stateValue = state.a;
	return stateValue;
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextMonth = F2(
	function (config, state) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var updatedTitleDate = A2(
			elm$core$Maybe$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths(1),
			stateValue.titleDate);
		return config.onChange(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{event: 'next', titleDate: updatedTitleDate})));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousMonth = F2(
	function (config, state) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var updatedTitleDate = A2(
			elm$core$Maybe$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths(-1),
			stateValue.titleDate);
		return config.onChange(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{event: 'previous', titleDate: updatedTitleDate})));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate = F3(
	function (year, month, day) {
		return A5(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts, year, month, day, 0, 0);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toMillitary = F2(
	function (hour, amPm) {
		var _n0 = _Utils_Tuple2(hour, amPm);
		_n0$3:
		while (true) {
			switch (_n0.b) {
				case 'AM':
					if (_n0.a === 12) {
						return 0;
					} else {
						break _n0$3;
					}
				case 'PM':
					if (_n0.a === 12) {
						return 12;
					} else {
						return hour + 12;
					}
				default:
					break _n0$3;
			}
		}
		return hour;
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime = F4(
	function (hour, minute, amPm, dateTime) {
		return _Utils_update(
			dateTime,
			{
				hour: A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toMillitary, hour, amPm),
				minute: minute
			});
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator = {$: 'AMPMIndicator'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator = {$: 'MinuteIndicator'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$dateClickHandler = F5(
	function (pickerType, stateValue, year, month, day) {
		var selectedDate = A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, year, month, day.day);
		var adjustedSelectedDate = function () {
			var _n7 = day.monthType;
			switch (_n7.$) {
				case 'Previous':
					return A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths, -1, selectedDate);
				case 'Current':
					return selectedDate;
				default:
					return A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths, 1, selectedDate);
			}
		}();
		var _n0 = function () {
			var _n1 = _Utils_Tuple2(
				_Utils_Tuple2(pickerType, stateValue.time.hour),
				_Utils_Tuple2(stateValue.time.minute, stateValue.time.amPm));
			_n1$2:
			while (true) {
				switch (_n1.a.a.$) {
					case 'DateTimeType':
						if (((_n1.a.b.$ === 'Just') && (_n1.b.a.$ === 'Just')) && (_n1.b.b.$ === 'Just')) {
							var _n2 = _n1.a;
							var hour = _n2.b.a;
							var _n3 = _n1.b;
							var minute = _n3.a.a;
							var amPm = _n3.b.a;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(
									A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, adjustedSelectedDate)),
								true);
						} else {
							break _n1$2;
						}
					case 'DateType':
						var _n4 = _n1.a;
						return _Utils_Tuple2(
							elm$core$Maybe$Just(adjustedSelectedDate),
							true);
					default:
						break _n1$2;
				}
			}
			return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
		}();
		var updatedDate = _n0.a;
		var forceClose = _n0.b;
		var updatedStateValue = _Utils_update(
			stateValue,
			{
				activeTimeIndicator: _Utils_eq(stateValue.time.hour, elm$core$Maybe$Nothing) ? elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator) : (_Utils_eq(stateValue.time.minute, elm$core$Maybe$Nothing) ? elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator) : (_Utils_eq(stateValue.time.amPm, elm$core$Maybe$Nothing) ? elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator) : elm$core$Maybe$Nothing)),
				date: elm$core$Maybe$Just(adjustedSelectedDate),
				forceClose: forceClose
			});
		var handler = function (config) {
			var _n6 = day.monthType;
			switch (_n6.$) {
				case 'Previous':
					return A3(
						NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousMonth,
						config,
						NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedStateValue),
						updatedDate);
				case 'Next':
					return A3(
						NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextMonth,
						config,
						NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedStateValue),
						updatedDate);
				default:
					return A2(
						config.onChange,
						NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedStateValue),
						updatedDate);
			}
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return handler(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return handler(config);
			default:
				var config = pickerType.a;
				return handler(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$rotate = F2(
	function (n, xs) {
		return _Utils_ap(
			A2(elm$core$List$drop, n, xs),
			A2(elm$core$List$take, n, xs));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToInt = F2(
	function (startOfWeek, day) {
		var base = function () {
			switch (day.$) {
				case 'Sun':
					return 0;
				case 'Mon':
					return 1;
				case 'Tue':
					return 2;
				case 'Wed':
					return 3;
				case 'Thu':
					return 4;
				case 'Fri':
					return 5;
				default:
					return 6;
			}
		}();
		switch (startOfWeek.$) {
			case 'Sun':
				return base;
			case 'Mon':
				return A2(elm$core$Basics$modBy, 7, base - 1);
			case 'Tue':
				return A2(elm$core$Basics$modBy, 7, base - 2);
			case 'Wed':
				return A2(elm$core$Basics$modBy, 7, base - 3);
			case 'Thu':
				return A2(elm$core$Basics$modBy, 7, base - 4);
			case 'Fri':
				return A2(elm$core$Basics$modBy, 7, base - 5);
			default:
				return A2(elm$core$Basics$modBy, 7, base - 6);
		}
	});
var elm$time$Time$Sun = {$: 'Sun'};
var rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		elm$virtual_dom$VirtualDom$text(str));
};
var rtfeldman$elm_css$Html$Styled$text = rtfeldman$elm_css$VirtualDom$Styled$text;
var rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 'Node', a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$Node;
var rtfeldman$elm_css$Html$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$node;
var rtfeldman$elm_css$Html$Styled$th = rtfeldman$elm_css$Html$Styled$node('th');
var NoRedInk$datetimepicker_legacy$DateTimePicker$dayNames = function (config) {
	var shiftAmount = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToInt, elm$time$Time$Sun, config.firstDayOfWeek);
	var days = _List_fromArray(
		[
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.sunday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.monday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.tuesday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.wednesday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.thursday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.friday)
				])),
			A2(
			rtfeldman$elm_css$Html$Styled$th,
			_List_Nil,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(config.nameOfDays.saturday)
				]))
		]);
	return A2(NoRedInk$datetimepicker_legacy$DateTimePicker$rotate, shiftAmount, days);
};
var elm$core$Basics$compare = _Utils_compare;
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$compareDays = F2(
	function (left, right) {
		var _n0 = A2(elm$core$Basics$compare, left.year, right.year);
		if (_n0.$ === 'EQ') {
			var _n1 = A2(
				elm$core$Basics$compare,
				NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt(left.month),
				NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt(right.month));
			if (_n1.$ === 'EQ') {
				return A2(elm$core$Basics$compare, left.day, right.day);
			} else {
				var monthOrder = _n1;
				return monthOrder;
			}
		} else {
			var yearOrder = _n0;
			return yearOrder;
		}
	});
var elm$time$Time$Fri = {$: 'Fri'};
var elm$time$Time$Mon = {$: 'Mon'};
var elm$time$Time$Sat = {$: 'Sat'};
var elm$time$Time$Thu = {$: 'Thu'};
var elm$time$Time$Tue = {$: 'Tue'};
var elm$time$Time$Wed = {$: 'Wed'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$dayOfWeek = function (_n0) {
	var year = _n0.year;
	var month = _n0.month;
	var day = _n0.day;
	var om = NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt(month);
	var y = (om <= 2) ? (A2(elm$core$Basics$modBy, 100, year) - 1) : A2(elm$core$Basics$modBy, 100, year);
	var m = (om <= 2) ? (om + 10) : (om - 2);
	var k = day;
	var c = elm$core$Basics$floor(year / 100);
	var w = A2(
		elm$core$Basics$modBy,
		7,
		((((k + elm$core$Basics$floor((2.6 * m) - 0.2)) - (2 * c)) + y) + elm$core$Basics$floor(y / 4)) + elm$core$Basics$floor(c / 4));
	switch (w) {
		case 0:
			return elm$time$Time$Sun;
		case 1:
			return elm$time$Time$Mon;
		case 2:
			return elm$time$Time$Tue;
		case 3:
			return elm$time$Time$Wed;
		case 4:
			return elm$time$Time$Thu;
		case 5:
			return elm$time$Time$Fri;
		default:
			return elm$time$Time$Sat;
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toFirstOfMonth = function (_n0) {
	var month = _n0.month;
	var year = _n0.year;
	var hour = _n0.hour;
	var minute = _n0.minute;
	return {day: 1, hour: hour, minute: minute, month: month, year: year};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToDateTime = F3(
	function (year, month, day) {
		var _n0 = day.monthType;
		switch (_n0.$) {
			case 'Current':
				return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, year, month, day.day);
			case 'Previous':
				var previousMonth = A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths,
					-1,
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, year, month, day.day));
				return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, previousMonth.year, previousMonth.month, day.day);
			default:
				var nextMonth = A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths,
					1,
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, year, month, day.day));
				return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, nextMonth.year, nextMonth.month, day.day);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Current = {$: 'Current'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Day = F2(
	function (monthType, day) {
		return {day: day, monthType: monthType};
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Next = {$: 'Next'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Previous = {$: 'Previous'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$byWeek = function (list) {
	return (elm$core$List$length(list) >= 7) ? A2(
		elm$core$List$cons,
		A2(elm$core$List$take, 7, list),
		NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$byWeek(
			A2(elm$core$List$drop, 7, list))) : _List_Nil;
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$calculateNumberOfDaysForPreviousMonth = function (firstDayInInt) {
	return (!firstDayInInt) ? 7 : firstDayInInt;
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$generateCalendar = F3(
	function (firstDayOfWeek, month, year) {
		var nextMonth = A2(
			elm$core$List$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Day(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Next),
			A2(elm$core$List$range, 1, 14));
		var firstDateOfMonth = A5(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts, year, month, 1, 0, 0);
		var firstDayOfMonth = A2(
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToInt,
			firstDayOfWeek,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$dayOfWeek(firstDateOfMonth));
		var numberOfDaysForPreviousMonth = NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$calculateNumberOfDaysForPreviousMonth(firstDayOfMonth);
		var firstOfPreviousMonth = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths, -1, firstDateOfMonth);
		var daysInPreviousMonth = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$daysInMonth, firstOfPreviousMonth.year, firstOfPreviousMonth.month);
		var previousMonth = A2(
			elm$core$List$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Day(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Previous),
			A2(elm$core$List$range, (daysInPreviousMonth - numberOfDaysForPreviousMonth) + 1, daysInPreviousMonth));
		var daysInMonth = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$daysInMonth, firstDateOfMonth.year, firstDateOfMonth.month);
		var currentMonth = A2(
			elm$core$List$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Day(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$Current),
			A2(elm$core$List$range, 1, daysInMonth));
		return NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$byWeek(
			A2(
				elm$core$List$take,
				42,
				_Utils_ap(
					previousMonth,
					_Utils_ap(currentMonth, nextMonth))));
	});
var elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 'Attribute', a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$on, eventName, handler),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Events$custom = F2(
	function (event, decoder) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$custom,
		'mousedown',
		elm$json$Json$Decode$succeed(
			{message: msg, preventDefault: true, stopPropagation: true}));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$custom,
		'touchstart',
		elm$json$Json$Decode$succeed(
			{message: msg, preventDefault: true, stopPropagation: true}));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullDayOfWeek = function (dateTime) {
	var _n0 = NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$dayOfWeek(dateTime);
	switch (_n0.$) {
		case 'Sun':
			return 'Sunday';
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		default:
			return 'Saturday';
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullMonth = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$accessibilityDateFormatter = function (dateTime) {
	return elm$core$String$fromInt(dateTime.day) + (', ' + (NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullDayOfWeek(dateTime) + (' ' + (NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullMonth(dateTime.month) + (' ' + elm$core$String$fromInt(dateTime.year))))));
};
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var elm$core$String$cons = _String_cons;
var rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2(elm$core$String$startsWith, '#', str) ? str : A2(
		elm$core$String$cons,
		_Utils_chr('#'),
		str);
};
var rtfeldman$elm_css$Css$Structure$Compatible = {$: 'Compatible'};
var rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		alpha: 1,
		blue: 0,
		color: rtfeldman$elm_css$Css$Structure$Compatible,
		green: 0,
		red: 0,
		value: rtfeldman$elm_css$Css$withPrecedingHash(str)
	};
};
var elm$core$String$fromList = _String_fromList;
var elm$core$String$toLower = _String_toLower;
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return elm$core$Result$Err(
				f(e));
		}
	});
var elm$core$Basics$pow = _Basics_pow;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2(elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return elm$core$Result$Err(
							elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var rtfeldman$elm_hex$Hex$fromString = function (str) {
	if (elm$core$String$isEmpty(str)) {
		return elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2(elm$core$String$startsWith, '-', str)) {
				var list = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					elm$core$List$tail(
						elm$core$String$toList(str)));
				return A2(
					elm$core$Result$map,
					elm$core$Basics$negate,
					A3(
						rtfeldman$elm_hex$Hex$fromStringHelp,
						elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					rtfeldman$elm_hex$Hex$fromStringHelp,
					elm$core$String$length(str) - 1,
					elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2(elm$core$Result$mapError, formatError, result);
	}
};
var rtfeldman$elm_css$Css$validHex = F5(
	function (str, _n0, _n1, _n2, _n3) {
		var r1 = _n0.a;
		var r2 = _n0.b;
		var g1 = _n1.a;
		var g2 = _n1.b;
		var b1 = _n2.a;
		var b2 = _n2.b;
		var a1 = _n3.a;
		var a2 = _n3.b;
		var toResult = A2(
			elm$core$Basics$composeR,
			elm$core$String$fromList,
			A2(elm$core$Basics$composeR, elm$core$String$toLower, rtfeldman$elm_hex$Hex$fromString));
		var results = _Utils_Tuple2(
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[r1, r2])),
				toResult(
					_List_fromArray(
						[g1, g2]))),
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[b1, b2])),
				toResult(
					_List_fromArray(
						[a1, a2]))));
		if ((((results.a.a.$ === 'Ok') && (results.a.b.$ === 'Ok')) && (results.b.a.$ === 'Ok')) && (results.b.b.$ === 'Ok')) {
			var _n5 = results.a;
			var red = _n5.a.a;
			var green = _n5.b.a;
			var _n6 = results.b;
			var blue = _n6.a.a;
			var alpha = _n6.b.a;
			return {
				alpha: alpha / 255,
				blue: blue,
				color: rtfeldman$elm_css$Css$Structure$Compatible,
				green: green,
				red: red,
				value: rtfeldman$elm_css$Css$withPrecedingHash(str)
			};
		} else {
			return rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2(elm$core$String$startsWith, '#', str) ? A2(elm$core$String$dropLeft, 1, str) : str;
	var _n0 = elm$core$String$toList(withoutHash);
	_n0$4:
	while (true) {
		if ((_n0.b && _n0.b.b) && _n0.b.b.b) {
			if (!_n0.b.b.b.b) {
				var r = _n0.a;
				var _n1 = _n0.b;
				var g = _n1.a;
				var _n2 = _n1.b;
				var b = _n2.a;
				return A5(
					rtfeldman$elm_css$Css$validHex,
					str,
					_Utils_Tuple2(r, r),
					_Utils_Tuple2(g, g),
					_Utils_Tuple2(b, b),
					_Utils_Tuple2(
						_Utils_chr('f'),
						_Utils_chr('f')));
			} else {
				if (!_n0.b.b.b.b.b) {
					var r = _n0.a;
					var _n3 = _n0.b;
					var g = _n3.a;
					var _n4 = _n3.b;
					var b = _n4.a;
					var _n5 = _n4.b;
					var a = _n5.a;
					return A5(
						rtfeldman$elm_css$Css$validHex,
						str,
						_Utils_Tuple2(r, r),
						_Utils_Tuple2(g, g),
						_Utils_Tuple2(b, b),
						_Utils_Tuple2(a, a));
				} else {
					if (_n0.b.b.b.b.b.b) {
						if (!_n0.b.b.b.b.b.b.b) {
							var r1 = _n0.a;
							var _n6 = _n0.b;
							var r2 = _n6.a;
							var _n7 = _n6.b;
							var g1 = _n7.a;
							var _n8 = _n7.b;
							var g2 = _n8.a;
							var _n9 = _n8.b;
							var b1 = _n9.a;
							var _n10 = _n9.b;
							var b2 = _n10.a;
							return A5(
								rtfeldman$elm_css$Css$validHex,
								str,
								_Utils_Tuple2(r1, r2),
								_Utils_Tuple2(g1, g2),
								_Utils_Tuple2(b1, b2),
								_Utils_Tuple2(
									_Utils_chr('f'),
									_Utils_chr('f')));
						} else {
							if (_n0.b.b.b.b.b.b.b.b && (!_n0.b.b.b.b.b.b.b.b.b)) {
								var r1 = _n0.a;
								var _n11 = _n0.b;
								var r2 = _n11.a;
								var _n12 = _n11.b;
								var g1 = _n12.a;
								var _n13 = _n12.b;
								var g2 = _n13.a;
								var _n14 = _n13.b;
								var b1 = _n14.a;
								var _n15 = _n14.b;
								var b2 = _n15.a;
								var _n16 = _n15.b;
								var a1 = _n16.a;
								var _n17 = _n16.b;
								var a2 = _n17.a;
								return A5(
									rtfeldman$elm_css$Css$validHex,
									str,
									_Utils_Tuple2(r1, r2),
									_Utils_Tuple2(g1, g2),
									_Utils_Tuple2(b1, b2),
									_Utils_Tuple2(a1, a2));
							} else {
								break _n0$4;
							}
						}
					} else {
						break _n0$4;
					}
				}
			}
		} else {
			break _n0$4;
		}
	}
	return rtfeldman$elm_css$Css$erroneousHex(str);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray = rtfeldman$elm_css$Css$hex('#ccc');
var rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 'ApplyStyles', a: a};
};
var rtfeldman$elm_css$Css$batch = rtfeldman$elm_css$Css$Preprocess$ApplyStyles;
var rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 'AppendProperty', a: a};
};
var rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(rtfeldman$elm_css$Css$property, key, arg.value);
	});
var rtfeldman$elm_css$Css$border = rtfeldman$elm_css$Css$prop1('border');
var rtfeldman$elm_css$Css$cursor = rtfeldman$elm_css$Css$prop1('cursor');
var rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.value, argB.value, argC.value, argD.value])));
	});
var rtfeldman$elm_css$Css$padding4 = rtfeldman$elm_css$Css$prop4('padding');
var rtfeldman$elm_css$Css$pointer = {cursor: rtfeldman$elm_css$Css$Structure$Compatible, value: 'pointer'};
var rtfeldman$elm_css$Css$PxUnits = {$: 'PxUnits'};
var elm$core$String$fromFloat = _String_fromNumber;
var rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			absoluteLength: rtfeldman$elm_css$Css$Structure$Compatible,
			calc: rtfeldman$elm_css$Css$Structure$Compatible,
			flexBasis: rtfeldman$elm_css$Css$Structure$Compatible,
			fontSize: rtfeldman$elm_css$Css$Structure$Compatible,
			length: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAuto: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAutoOrCoverOrContain: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrMinMaxDimension: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNone: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumber: rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: rtfeldman$elm_css$Css$Structure$Compatible,
			numericValue: numericValue,
			textIndent: rtfeldman$elm_css$Css$Structure$Compatible,
			unitLabel: unitLabel,
			units: units,
			value: _Utils_ap(
				elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var rtfeldman$elm_css$Css$px = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, rtfeldman$elm_css$Css$PxUnits, 'px');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$cellStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A4(
			rtfeldman$elm_css$Css$padding4,
			rtfeldman$elm_css$Css$px(7),
			rtfeldman$elm_css$Css$px(7),
			rtfeldman$elm_css$Css$px(7),
			rtfeldman$elm_css$Css$px(9)),
			rtfeldman$elm_css$Css$border(
			rtfeldman$elm_css$Css$px(0)),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
		]));
var rtfeldman$elm_css$Css$right = rtfeldman$elm_css$Css$prop1('right');
var rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 'AppendProperty':
					var str = style.a;
					var key = A2(
						elm$core$Maybe$withDefault,
						'',
						elm$core$List$head(
							A2(elm$core$String$split, ':', str)));
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 'ExtendSelector':
					var selector = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 'NestSnippet':
					var combinator = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 'WithPseudoElement':
					var pseudoElement = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 'WithMedia':
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 'WithKeyframes':
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _n1 = style.a;
							var only = _n1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _n2 = style.a;
							var first = _n2.a;
							var rest = _n2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var rtfeldman$elm_css$Css$Internal$IncompatibleUnits = {$: 'IncompatibleUnits'};
var rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3(rtfeldman$elm_css$Css$Internal$lengthConverter, rtfeldman$elm_css$Css$Internal$IncompatibleUnits, '', 0);
var rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$dayStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$cellStyle,
			rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$right)
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$fadeText = rtfeldman$elm_css$Css$hex('#a1a1a1');
var rtfeldman$elm_css$Css$borderRadius = rtfeldman$elm_css$Css$prop1('border-radius');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$borderRadius(
			rtfeldman$elm_css$Css$px(0))
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightSelectedDay = rtfeldman$elm_css$Css$hex('#d5e5f3');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$selectedDate = rtfeldman$elm_css$Css$hex('#428bca');
var rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'background-color', c.value);
};
var rtfeldman$elm_css$Css$color = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'color', c.value);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2(rtfeldman$elm_css$Css$property, 'box-shadow', 'inset 0 0 10px 3px #3276b1'),
			rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$selectedDate),
			rtfeldman$elm_css$Css$color(
			rtfeldman$elm_css$Css$hex('#fff')),
			NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightedDay = rtfeldman$elm_css$Css$hex('#ebebeb');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray = rtfeldman$elm_css$Css$hex('#f5f5f5');
var rtfeldman$elm_css$Css$margin = rtfeldman$elm_css$Css$prop1('margin');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$tableStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2(rtfeldman$elm_css$Css$property, 'border-spacing', '0'),
			A2(rtfeldman$elm_css$Css$property, 'border-width', '0'),
			A2(rtfeldman$elm_css$Css$property, 'table-layout', 'fixed'),
			rtfeldman$elm_css$Css$margin(
			rtfeldman$elm_css$Css$px(0))
		]));
var rtfeldman$elm_css$Css$auto = {alignItemsOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, cursor: rtfeldman$elm_css$Css$Structure$Compatible, flexBasis: rtfeldman$elm_css$Css$Structure$Compatible, intOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, justifyContentOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAutoOrCoverOrContain: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: rtfeldman$elm_css$Css$Structure$Compatible, overflow: rtfeldman$elm_css$Css$Structure$Compatible, pointerEvents: rtfeldman$elm_css$Css$Structure$Compatible, tableLayout: rtfeldman$elm_css$Css$Structure$Compatible, textRendering: rtfeldman$elm_css$Css$Structure$Compatible, touchAction: rtfeldman$elm_css$Css$Structure$Compatible, value: 'auto'};
var rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.value, argB.value, argC.value])));
	});
var rtfeldman$elm_css$Css$borderBottom3 = rtfeldman$elm_css$Css$prop3('border-bottom');
var rtfeldman$elm_css$Css$default = {cursor: rtfeldman$elm_css$Css$Structure$Compatible, value: 'default'};
var rtfeldman$elm_css$Css$fontWeight = function (_n0) {
	var value = _n0.value;
	return A2(rtfeldman$elm_css$Css$property, 'font-weight', value);
};
var rtfeldman$elm_css$Css$Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {$: 'ExtendSelector', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$PseudoClassSelector = function (a) {
	return {$: 'PseudoClassSelector', a: a};
};
var rtfeldman$elm_css$Css$pseudoClass = function (_class) {
	return rtfeldman$elm_css$Css$Preprocess$ExtendSelector(
		rtfeldman$elm_css$Css$Structure$PseudoClassSelector(_class));
};
var rtfeldman$elm_css$Css$hover = rtfeldman$elm_css$Css$pseudoClass('hover');
var rtfeldman$elm_css$Css$initial = {alignItems: rtfeldman$elm_css$Css$Structure$Compatible, all: rtfeldman$elm_css$Css$Structure$Compatible, backgroundAttachment: rtfeldman$elm_css$Css$Structure$Compatible, backgroundBlendMode: rtfeldman$elm_css$Css$Structure$Compatible, backgroundImage: rtfeldman$elm_css$Css$Structure$Compatible, backgroundOrigin: rtfeldman$elm_css$Css$Structure$Compatible, backgroundRepeat: rtfeldman$elm_css$Css$Structure$Compatible, backgroundRepeatShorthand: rtfeldman$elm_css$Css$Structure$Compatible, borderStyle: rtfeldman$elm_css$Css$Structure$Compatible, boxSizing: rtfeldman$elm_css$Css$Structure$Compatible, color: rtfeldman$elm_css$Css$Structure$Compatible, cursor: rtfeldman$elm_css$Css$Structure$Compatible, display: rtfeldman$elm_css$Css$Structure$Compatible, flexBasis: rtfeldman$elm_css$Css$Structure$Compatible, flexDirection: rtfeldman$elm_css$Css$Structure$Compatible, flexDirectionOrWrap: rtfeldman$elm_css$Css$Structure$Compatible, flexWrap: rtfeldman$elm_css$Css$Structure$Compatible, fontFamily: rtfeldman$elm_css$Css$Structure$Compatible, fontSize: rtfeldman$elm_css$Css$Structure$Compatible, fontStyle: rtfeldman$elm_css$Css$Structure$Compatible, fontVariant: rtfeldman$elm_css$Css$Structure$Compatible, fontWeight: rtfeldman$elm_css$Css$Structure$Compatible, intOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, justifyContent: rtfeldman$elm_css$Css$Structure$Compatible, keyframes: rtfeldman$elm_css$Css$Structure$Compatible, length: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAuto: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAutoOrCoverOrContain: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrMinMaxDimension: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNone: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNoneOrMinMaxDimension: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumber: rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: rtfeldman$elm_css$Css$Structure$Compatible, listStylePosition: rtfeldman$elm_css$Css$Structure$Compatible, listStyleType: rtfeldman$elm_css$Css$Structure$Compatible, listStyleTypeOrPositionOrImage: rtfeldman$elm_css$Css$Structure$Compatible, none: rtfeldman$elm_css$Css$Structure$Compatible, number: rtfeldman$elm_css$Css$Structure$Compatible, numericValue: 0, outline: rtfeldman$elm_css$Css$Structure$Compatible, overflow: rtfeldman$elm_css$Css$Structure$Compatible, pointerEvents: rtfeldman$elm_css$Css$Structure$Compatible, tableLayout: rtfeldman$elm_css$Css$Structure$Compatible, textDecorationLine: rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: rtfeldman$elm_css$Css$Structure$Compatible, textIndent: rtfeldman$elm_css$Css$Structure$Compatible, textRendering: rtfeldman$elm_css$Css$Structure$Compatible, textTransform: rtfeldman$elm_css$Css$Structure$Compatible, touchAction: rtfeldman$elm_css$Css$Structure$Compatible, unitLabel: '', units: rtfeldman$elm_css$Css$Internal$IncompatibleUnits, value: 'initial', visibility: rtfeldman$elm_css$Css$Structure$Compatible, whiteSpace: rtfeldman$elm_css$Css$Structure$Compatible};
var rtfeldman$elm_css$Css$inherit = _Utils_update(
	rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var rtfeldman$elm_css$Css$normal = {featureTagValue: rtfeldman$elm_css$Css$Structure$Compatible, fontStyle: rtfeldman$elm_css$Css$Structure$Compatible, fontWeight: rtfeldman$elm_css$Css$Structure$Compatible, overflowWrap: rtfeldman$elm_css$Css$Structure$Compatible, value: 'normal', whiteSpace: rtfeldman$elm_css$Css$Structure$Compatible};
var rtfeldman$elm_css$Css$solid = {borderStyle: rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: rtfeldman$elm_css$Css$Structure$Compatible, value: 'solid'};
var rtfeldman$elm_css$Css$width = rtfeldman$elm_css$Css$prop1('width');
var rtfeldman$elm_css$Css$Preprocess$NestSnippet = F2(
	function (a, b) {
		return {$: 'NestSnippet', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$Descendant = {$: 'Descendant'};
var rtfeldman$elm_css$Css$Global$descendants = rtfeldman$elm_css$Css$Preprocess$NestSnippet(rtfeldman$elm_css$Css$Structure$Descendant);
var rtfeldman$elm_css$Css$Preprocess$Snippet = function (a) {
	return {$: 'Snippet', a: a};
};
var rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 'Selector', a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$TypeSelector = function (a) {
	return {$: 'TypeSelector', a: a};
};
var rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 'TypeSelectorSequence', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Global$typeSelector = F2(
	function (selectorStr, styles) {
		var sequence = A2(
			rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
			rtfeldman$elm_css$Css$Structure$TypeSelector(selectorStr),
			_List_Nil);
		var sel = A3(rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, elm$core$Maybe$Nothing);
		return rtfeldman$elm_css$Css$Preprocess$Snippet(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
					A3(rtfeldman$elm_css$Css$Preprocess$StyleBlock, sel, _List_Nil, styles))
				]));
	});
var rtfeldman$elm_css$Css$Global$td = rtfeldman$elm_css$Css$Global$typeSelector('td');
var rtfeldman$elm_css$Css$Global$th = rtfeldman$elm_css$Css$Global$typeSelector('th');
var rtfeldman$elm_css$Css$Global$thead = rtfeldman$elm_css$Css$Global$typeSelector('thead');
var rtfeldman$elm_css$Html$Styled$table = rtfeldman$elm_css$Html$Styled$node('table');
var rtfeldman$elm_css$Html$Styled$tbody = rtfeldman$elm_css$Html$Styled$node('tbody');
var rtfeldman$elm_css$Html$Styled$td = rtfeldman$elm_css$Html$Styled$node('td');
var rtfeldman$elm_css$Html$Styled$thead = rtfeldman$elm_css$Html$Styled$node('thead');
var rtfeldman$elm_css$Html$Styled$tr = rtfeldman$elm_css$Html$Styled$node('tr');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var rtfeldman$elm_css$VirtualDom$Styled$attribute = F2(
	function (key, value) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$attribute, key, value),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Attributes$attribute = rtfeldman$elm_css$VirtualDom$Styled$attribute;
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {charsProcessed: charsProcessed, hash: hash, seed: seed, shift: shift};
	});
var Skinney$murmur3$Murmur3$c1 = 3432918353;
var Skinney$murmur3$Murmur3$c2 = 461845907;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var Skinney$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var elm$core$Bitwise$or = _Bitwise_or;
var Skinney$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var elm$core$Bitwise$xor = _Bitwise_xor;
var Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = data.hash ? (data.seed ^ A2(
		Skinney$murmur3$Murmur3$multiplyBy,
		Skinney$murmur3$Murmur3$c2,
		A2(
			Skinney$murmur3$Murmur3$rotlBy,
			15,
			A2(Skinney$murmur3$Murmur3$multiplyBy, Skinney$murmur3$Murmur3$c1, data.hash)))) : data.seed;
	var h0 = acc ^ data.charsProcessed;
	var h1 = A2(Skinney$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2(Skinney$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var Skinney$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			Skinney$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				Skinney$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					Skinney$murmur3$Murmur3$multiplyBy,
					Skinney$murmur3$Murmur3$c2,
					A2(
						Skinney$murmur3$Murmur3$rotlBy,
						15,
						A2(Skinney$murmur3$Murmur3$multiplyBy, Skinney$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | ((255 & elm$core$Char$toCode(c)) << data.shift);
		var _n0 = data.shift;
		if (_n0 === 24) {
			return {
				charsProcessed: data.charsProcessed + 1,
				hash: 0,
				seed: A2(Skinney$murmur3$Murmur3$mix, data.seed, res),
				shift: 0
			};
		} else {
			return {charsProcessed: data.charsProcessed + 1, hash: res, seed: data.seed, shift: data.shift + 8};
		}
	});
var elm$core$String$foldl = _String_foldl;
var Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return Skinney$murmur3$Murmur3$finalize(
			A3(
				elm$core$String$foldl,
				Skinney$murmur3$Murmur3$hashFold,
				A4(Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {charset: elm$core$Maybe$Nothing, imports: _List_Nil, namespaces: _List_Nil, snippets: snippets};
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_n0) {
	var declarations = _n0.a;
	return declarations;
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (declarations.a.$ === 'StyleBlockDeclaration') {
				var _n1 = declarations.a.a;
				var firstSelector = _n1.a;
				var otherSelectors = _n1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2(elm$core$List$cons, firstSelector, otherSelectors),
					rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 'Nothing') {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 'FontFeatureValues', a: a};
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 'DocumentRule', a: a, b: b, c: c, d: d, e: e};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var structureStyleBlock = declaration.a;
			return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 'MediaRule', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 'SupportsRule', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var structureStyleBlock = declaration.a;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 'MediaRule':
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 'SupportsRule':
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 'DocumentRule':
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 'CounterStyle', a: a};
};
var rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 'FontFace', a: a};
};
var rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 'Keyframes', a: a};
};
var rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 'PageRule', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 'Viewport', a: a};
};
var rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		return A3(
			rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 'StyleBlockDeclaration':
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2(rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 'MediaRule':
						var _n1 = declarations.a;
						var mediaQueries = _n1.a;
						var styleBlocks = _n1.b;
						return _List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									rtfeldman$elm_css$Css$Structure$mapLast,
									rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2(elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _n0) {
		var sequence = _n0.a;
		var selectors = _n0.b;
		return A3(
			rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			elm$core$Maybe$Just(pseudo));
	});
var rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 'CustomSelector', a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 'UniversalSelectorSequence', a: a};
};
var rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 'TypeSelectorSequence':
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				var list = sequence.a;
				return rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _n1 = list.a;
				var combinator = _n1.a;
				var sequence = _n1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_n0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 'StyleBlockDeclaration':
							var styleBlock = declarations.a.a;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 'MediaRule':
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _n1 = declarations.a;
									var mediaQueries = _n1.a;
									var _n2 = _n1.b;
									var styleBlock = _n2.a;
									return _List_fromArray(
										[
											A2(
											rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _n3 = declarations.a;
									var mediaQueries = _n3.a;
									var _n4 = _n3.b;
									var first = _n4.a;
									var rest = _n4.b;
									var _n5 = A2(
										rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2(rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_n5.b && (_n5.a.$ === 'MediaRule')) && (!_n5.b.b)) {
										var _n6 = _n5.a;
										var newMediaQueries = _n6.a;
										var newStyleBlocks = _n6.b;
										return _List_fromArray(
											[
												A2(
												rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2(elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _n5;
										return newDeclarations;
									}
								}
							} else {
								break _n0$12;
							}
						case 'SupportsRule':
							var _n7 = declarations.a;
							var str = _n7.a;
							var nestedDeclarations = _n7.b;
							return _List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 'DocumentRule':
							var _n8 = declarations.a;
							var str1 = _n8.a;
							var str2 = _n8.b;
							var str3 = _n8.c;
							var str4 = _n8.d;
							var styleBlock = _n8.e;
							return A2(
								elm$core$List$map,
								A4(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 'PageRule':
							var _n9 = declarations.a;
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _n0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			elm$core$List$cons,
			first,
			A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var styleBlock = declaration.a;
			return A2(
				rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Hash$murmurSeed = 15739;
var rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2(elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var rtfeldman$elm_hex$Hex$toString = function (num) {
	return elm$core$String$fromList(
		(num < 0) ? A2(
			elm$core$List$cons,
			_Utils_chr('-'),
			A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		elm$core$String$cons,
		_Utils_chr('_'),
		rtfeldman$elm_hex$Hex$toString(
			A2(Skinney$murmur3$Murmur3$hashString, rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$tail(decls));
		};
		var nextResult = A2(
			rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _n14 = _Utils_Tuple2(
				elm$core$List$head(nextResult),
				rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((_n14.a.$ === 'Just') && (_n14.b.$ === 'Just')) {
				var nextResultParent = _n14.a.a;
				var originalParent = _n14.b.a;
				return _Utils_ap(
					A2(
						elm$core$List$take,
						elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return elm$core$List$concat(
				A2(
					rtfeldman$elm_css$Css$Structure$mapLast,
					rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						elm$core$List$map,
						elm$core$List$singleton,
						A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				insertStylesToNestedDecl,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 'AppendProperty':
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 'ExtendSelector':
					var _n4 = styles.a;
					var selector = _n4.a;
					var nestedStyles = _n4.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 'NestSnippet':
					var _n5 = styles.a;
					var selectorCombinator = _n5.a;
					var snippets = _n5.b;
					var rest = styles.b;
					var chain = F2(
						function (_n9, _n10) {
							var originalSequence = _n9.a;
							var originalTuples = _n9.b;
							var originalPseudoElement = _n9.c;
							var newSequence = _n10.a;
							var newTuples = _n10.b;
							var newPseudoElement = _n10.c;
							return A3(
								rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 'StyleBlockDeclaration':
								var _n7 = declaration.a;
								var firstSelector = _n7.a;
								var otherSelectors = _n7.b;
								var nestedStyles = _n7.c;
								var newSelectors = A2(
									elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											elm$core$List$map,
											chain(originalSelector),
											A2(elm$core$List$cons, firstSelector, otherSelectors));
									},
									rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 'MediaRule':
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 'SupportsRule':
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 'DocumentRule':
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									elm$core$List$map,
									A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 'PageRule':
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 'FontFace':
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 'Viewport':
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 'CounterStyle':
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								elm$core$List$map,
								expandDeclaration,
								A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 'WithPseudoElement':
					var _n11 = styles.a;
					var pseudoElement = _n11.a;
					var nestedStyles = _n11.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 'WithKeyframes':
					var str = styles.a.a;
					var rest = styles.b;
					var name = rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$Structure$Keyframes(
								{declaration: str, name: name})
							]));
				case 'WithMedia':
					var _n12 = styles.a;
					var mediaQueries = _n12.a;
					var nestedStyles = _n12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _n13 = rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_n13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _n13.a;
							var otherSelectors = _n13.b;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									elm$core$List$singleton(
										rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_n2) {
	var firstSelector = _n2.a;
	var otherSelectors = _n2.b;
	var styles = _n2.c;
	return A2(
		rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2(elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2(rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 'MediaRule':
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 'SupportsRule':
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 'DocumentRule':
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				elm$core$List$map,
				A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 'PageRule':
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 'FontFace':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 'Viewport':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 'CounterStyle':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_n0) {
	var charset = _n0.charset;
	var imports = _n0.imports;
	var namespaces = _n0.namespaces;
	var snippets = _n0.snippets;
	var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {charset: charset, declarations: declarations, imports: imports, namespaces: namespaces};
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _n0) {
		var keyframesByName = _n0.a;
		var declarations = _n0.b;
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var _n2 = declaration.a;
				var properties = _n2.c;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'MediaRule':
				var styleBlocks = declaration.b;
				return A2(
					elm$core$List$all,
					function (_n3) {
						var properties = _n3.c;
						return elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'SupportsRule':
				var otherDeclarations = declaration.b;
				return elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'DocumentRule':
				return _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'PageRule':
				var properties = declaration.b;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'FontFace':
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'Keyframes':
				var record = declaration.a;
				return elm$core$String$isEmpty(record.declaration) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3(elm$core$Dict$insert, record.name, record.declaration, keyframesByName),
					declarations);
			case 'Viewport':
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 'CounterStyle':
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					elm$core$List$all,
					function (_n4) {
						var properties = _n4.b;
						return elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
		}
	});
var rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			elm$core$List$append,
			A2(
				elm$core$List$map,
				function (_n0) {
					var name = _n0.a;
					var decl = _n0.b;
					return rtfeldman$elm_css$Css$Structure$Keyframes(
						{declaration: decl, name: name});
				},
				elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_n0) {
	var charset = _n0.charset;
	var imports = _n0.imports;
	var namespaces = _n0.namespaces;
	var declarations = _n0.declarations;
	var _n1 = A3(
		elm$core$List$foldr,
		rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2(elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _n1.a;
	var compactedDeclarations = _n1.b;
	var finalDeclarations = A2(rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {charset: charset, declarations: finalDeclarations, imports: imports, namespaces: namespaces};
};
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.feature + (A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			elm$core$Basics$append(': '),
			expression.value)) + ')'));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType.$) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				elm$core$String$join,
				' and ',
				A2(
					elm$core$List$cons,
					rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 'AllQuery':
			var expressions = mediaQuery.a;
			return A2(
				elm$core$String$join,
				' and ',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 'OnlyQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 'NotQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + (rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var rtfeldman$elm_css$Css$Structure$Output$importToString = function (_n0) {
	var name = _n0.a;
	var mediaQueries = _n0.b;
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_n0) {
	var prefix = _n0.a;
	var str = _n0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap(rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			A2(elm$core$Basics$composeL, rtfeldman$elm_css$Css$Structure$Output$indent, rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var elm$core$String$append = _String_append;
var rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_n0) {
	var str = _n0.a;
	return '::' + str;
};
var rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator.$) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 'ClassSelector':
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 'IdSelector':
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 'PseudoClassSelector':
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 'TypeSelectorSequence':
			var str = simpleSelectorSequence.a.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 'UniversalSelectorSequence':
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				elm$core$String$join,
				'',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_n0) {
	var combinator = _n0.a;
	var sequence = _n0.b;
	return A2(
		elm$core$String$join,
		' ',
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_n0) {
	var simpleSelectorSequence = _n0.a;
	var chain = _n0.b;
	var pseudoElement = _n0.c;
	var segments = A2(
		elm$core$List$cons,
		rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				elm$core$Maybe$withDefault,
				'',
				A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		elm$core$String$append,
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$filter,
				A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		var selectorStr = A2(
			elm$core$String$join,
			', ',
			A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2(elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = decl.a;
			return A2(rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 'MediaRule':
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				elm$core$String$join,
				',\n',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				elm$core$String$join,
				'\n\n',
				A2(
					elm$core$List$map,
					A2(
						elm$core$Basics$composeL,
						rtfeldman$elm_css$Css$Structure$Output$indent,
						rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 'SupportsRule':
			return 'TODO';
		case 'DocumentRule':
			return 'TODO';
		case 'PageRule':
			return 'TODO';
		case 'FontFace':
			return 'TODO';
		case 'Keyframes':
			var name = decl.a.name;
			var declaration = decl.a.declaration;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 'Viewport':
			return 'TODO';
		case 'CounterStyle':
			return 'TODO';
		default:
			return 'TODO';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_n0) {
	var charset = _n0.charset;
	var imports = _n0.imports;
	var namespaces = _n0.namespaces;
	var declarations = _n0.declarations;
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(
			elm$core$List$filter,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					elm$core$String$join,
					'\n\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		rtfeldman$elm_css$Css$Structure$compactStylesheet(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3(rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, elm$core$Maybe$Nothing);
		return rtfeldman$elm_css$Css$Preprocess$Snippet(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
					A3(rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
				]));
	});
var rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		elm$core$String$cons,
		_Utils_chr('_'),
		rtfeldman$elm_hex$Hex$toString(
			A2(
				Skinney$murmur3$Murmur3$hashString,
				rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					elm$core$List$singleton(
						rtfeldman$elm_css$Css$Preprocess$stylesheet(
							elm$core$List$singleton(
								A2(
									rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		elm$virtual_dom$VirtualDom$property,
		'className',
		elm$json$Json$Encode$string(classname));
	return A3(rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var rtfeldman$elm_css$Html$Styled$Attributes$css = rtfeldman$elm_css$Html$Styled$Internal$css;
var NoRedInk$datetimepicker_legacy$DateTimePicker$calendar = F3(
	function (pickerType, state, currentDate) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var html = function (config) {
			var _n1 = stateValue.titleDate;
			if (_n1.$ === 'Nothing') {
				return rtfeldman$elm_css$Html$Styled$text('');
			} else {
				var titleDate = _n1.a;
				var year = titleDate.year;
				var month = titleDate.month;
				var matchesDay = F2(
					function (reference, day) {
						var date = A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToDateTime, year, month, day);
						return A2(
							elm$core$Maybe$withDefault,
							false,
							A2(
								elm$core$Maybe$map,
								function (current) {
									return _Utils_eq(date.day, current.day) && (_Utils_eq(date.month, current.month) && _Utils_eq(date.year, current.year));
								},
								reference));
					});
				var isInRange = function (day) {
					var _n3 = config.earliestDate;
					if (_n3.$ === 'Nothing') {
						return true;
					} else {
						var earliestDate = _n3.a;
						return !_Utils_eq(
							A2(
								NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$compareDays,
								A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToDateTime, year, month, day),
								earliestDate),
							elm$core$Basics$LT);
					}
				};
				var toCell = function (day) {
					var styles = elm$core$List$concat(
						_List_fromArray(
							[
								function () {
								var _n2 = day.monthType;
								switch (_n2.$) {
									case 'Previous':
										return _List_fromArray(
											[
												rtfeldman$elm_css$Css$color(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$fadeText)
											]);
									case 'Current':
										return _List_Nil;
									default:
										return _List_fromArray(
											[
												rtfeldman$elm_css$Css$color(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$fadeText)
											]);
								}
							}(),
								isInRange(day) ? _List_Nil : _List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$inherit),
									rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$default),
									rtfeldman$elm_css$Css$color(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray),
									rtfeldman$elm_css$Css$hover(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$inherit)
										]))
								]),
								A2(matchesDay, stateValue.date, day) ? _List_fromArray(
								[
									NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle,
									rtfeldman$elm_css$Css$hover(
									_List_fromArray(
										[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle]))
								]) : (A2(matchesDay, stateValue.today, day) ? _List_fromArray(
								[
									A2(rtfeldman$elm_css$Css$property, 'box-shadow', 'inset 0 0 7px 0 #76abd9'),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle,
									rtfeldman$elm_css$Css$hover(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightSelectedDay)
										]))
								]) : _List_Nil)
							]));
					var selectedDate = A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToDateTime, year, month, day);
					var handler = A5(NoRedInk$datetimepicker_legacy$DateTimePicker$dateClickHandler, pickerType, stateValue, year, month, day);
					var handlers = isInRange(day) ? _List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(handler),
							NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(handler)
						]) : _List_Nil;
					return A2(
						rtfeldman$elm_css$Html$Styled$td,
						elm$core$List$concat(
							_List_fromArray(
								[
									_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(styles),
										A2(rtfeldman$elm_css$Html$Styled$Attributes$attribute, 'role', 'button'),
										A2(
										rtfeldman$elm_css$Html$Styled$Attributes$attribute,
										'aria-label',
										NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$accessibilityDateFormatter(selectedDate)),
										A2(
										rtfeldman$elm_css$Html$Styled$Attributes$attribute,
										'data-in-range',
										isInRange(day) ? 'true' : 'false')
									]),
									handlers
								])),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(
								elm$core$String$fromInt(day.day))
							]));
				};
				var toWeekRow = function (week) {
					return A2(
						rtfeldman$elm_css$Html$Styled$tr,
						_List_Nil,
						A2(elm$core$List$map, toCell, week));
				};
				var header = A2(
					rtfeldman$elm_css$Html$Styled$thead,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							rtfeldman$elm_css$Html$Styled$tr,
							_List_Nil,
							NoRedInk$datetimepicker_legacy$DateTimePicker$dayNames(config))
						]));
				var firstDay = A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$dayToInt,
					config.firstDayOfWeek,
					NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$dayOfWeek(
						NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toFirstOfMonth(titleDate)));
				var days = A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$generateCalendar, config.firstDayOfWeek, month, year);
				var body = A2(
					rtfeldman$elm_css$Html$Styled$tbody,
					_List_Nil,
					A2(elm$core$List$map, toWeekRow, days));
				return A2(
					rtfeldman$elm_css$Html$Styled$table,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(
									rtfeldman$elm_css$Css$hex('#ffffff')),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$tableStyle,
									rtfeldman$elm_css$Css$width(rtfeldman$elm_css$Css$auto),
									rtfeldman$elm_css$Css$margin(
									rtfeldman$elm_css$Css$px(0)),
									rtfeldman$elm_css$Css$Global$descendants(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$Global$thead(_List_Nil),
											rtfeldman$elm_css$Css$Global$td(
											_List_fromArray(
												[
													NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$dayStyle,
													rtfeldman$elm_css$Css$hover(
													_List_fromArray(
														[
															rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightedDay),
															NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle
														]))
												])),
											rtfeldman$elm_css$Css$Global$th(
											_List_fromArray(
												[
													NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$dayStyle,
													rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray),
													rtfeldman$elm_css$Css$fontWeight(rtfeldman$elm_css$Css$normal),
													A3(
													rtfeldman$elm_css$Css$borderBottom3,
													rtfeldman$elm_css$Css$px(1),
													rtfeldman$elm_css$Css$solid,
													NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray)
												]))
										]))
								]))
						]),
					_List_fromArray(
						[header, body]));
			}
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return html(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				var config = pickerType.a;
				return rtfeldman$elm_css$Html$Styled$text('');
		}
	});
var rtfeldman$elm_css$Css$left = rtfeldman$elm_css$Css$prop1('left');
var NoRedInk$datetimepicker_legacy$DateTimePicker$noYearNavigationStyle = function (config) {
	return config.allowYearNavigation ? rtfeldman$elm_css$Css$batch(_List_Nil) : rtfeldman$elm_css$Css$left(
		rtfeldman$elm_css$Css$px(0));
};
var rtfeldman$elm_css$Css$borderBox = {backgroundClip: rtfeldman$elm_css$Css$Structure$Compatible, boxSizing: rtfeldman$elm_css$Css$Structure$Compatible, value: 'border-box'};
var rtfeldman$elm_css$Css$boxSizing = rtfeldman$elm_css$Css$prop1('box-sizing');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$borderBoxStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox)
		]));
var rtfeldman$elm_css$Css$absolute = {position: rtfeldman$elm_css$Css$Structure$Compatible, value: 'absolute'};
var rtfeldman$elm_css$Css$center = rtfeldman$elm_css$Css$prop1('center');
var rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.value, argB.value])));
	});
var rtfeldman$elm_css$Css$padding2 = rtfeldman$elm_css$Css$prop2('padding');
var rtfeldman$elm_css$Css$position = rtfeldman$elm_css$Css$prop1('position');
var rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return funcName + ('(' + (A2(elm$core$String$join, ', ', args) + ')'));
	});
var rtfeldman$elm_css$Css$scale = function (x) {
	return {
		transform: rtfeldman$elm_css$Css$Structure$Compatible,
		value: A2(
			rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_List_fromArray(
				[
					elm$core$String$fromFloat(x)
				]))
	};
};
var rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return elm$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				function ($) {
					return $.value;
				},
				list))
	};
};
var rtfeldman$elm_css$Css$transforms = A2(
	elm$core$Basics$composeL,
	rtfeldman$elm_css$Css$prop1('transform'),
	rtfeldman$elm_css$Css$valuesOrNone);
var rtfeldman$elm_css$Css$transform = function (only) {
	return rtfeldman$elm_css$Css$transforms(
		_List_fromArray(
			[only]));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$arrowStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$borderBoxStyle,
			rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
			rtfeldman$elm_css$Css$transform(
			rtfeldman$elm_css$Css$scale(0.8)),
			rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
			A2(
			rtfeldman$elm_css$Css$padding2,
			rtfeldman$elm_css$Css$px(0),
			rtfeldman$elm_css$Css$px(8)),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Right = {$: 'Right'};
var rtfeldman$elm_css$VirtualDom$Styled$NodeNS = F4(
	function (a, b, c, d) {
		return {$: 'NodeNS', a: a, b: b, c: c, d: d};
	});
var rtfeldman$elm_css$VirtualDom$Styled$nodeNS = rtfeldman$elm_css$VirtualDom$Styled$NodeNS;
var rtfeldman$elm_css$Svg$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$nodeNS('http://www.w3.org/2000/svg');
var rtfeldman$elm_css$Svg$Styled$polygon = rtfeldman$elm_css$Svg$Styled$node('polygon');
var rtfeldman$elm_css$Svg$Styled$svg = rtfeldman$elm_css$Svg$Styled$node('svg');
var rtfeldman$elm_css$Svg$Styled$Attributes$height = rtfeldman$elm_css$VirtualDom$Styled$attribute('height');
var rtfeldman$elm_css$Svg$Styled$Attributes$points = rtfeldman$elm_css$VirtualDom$Styled$attribute('points');
var rtfeldman$elm_css$Svg$Styled$Attributes$style = rtfeldman$elm_css$VirtualDom$Styled$attribute('style');
var rtfeldman$elm_css$Svg$Styled$Attributes$viewBox = rtfeldman$elm_css$VirtualDom$Styled$attribute('viewBox');
var rtfeldman$elm_css$Svg$Styled$Attributes$width = rtfeldman$elm_css$VirtualDom$Styled$attribute('width');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$arrow = function (orientation) {
	var rotation = function () {
		switch (orientation.$) {
			case 'Right':
				return '0';
			case 'Left':
				return '180';
			case 'Down':
				return '90';
			default:
				return '270';
		}
	}();
	return A2(
		rtfeldman$elm_css$Svg$Styled$svg,
		_List_fromArray(
			[
				rtfeldman$elm_css$Svg$Styled$Attributes$width('8'),
				rtfeldman$elm_css$Svg$Styled$Attributes$height('12'),
				rtfeldman$elm_css$Svg$Styled$Attributes$viewBox('0 0 16 16'),
				rtfeldman$elm_css$Svg$Styled$Attributes$style('transform: rotate(' + (rotation + 'deg);'))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Svg$Styled$polygon,
				_List_fromArray(
					[
						rtfeldman$elm_css$Svg$Styled$Attributes$points('0 0, 0 20, 16 10')
					]),
				_List_Nil)
			]));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$rightArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$arrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Right);
var rtfeldman$elm_css$Html$Styled$span = rtfeldman$elm_css$Html$Styled$node('span');
var NoRedInk$datetimepicker_legacy$DateTimePicker$nextButton = F3(
	function (config, state, currentDate) {
		return A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$arrowStyle,
							rtfeldman$elm_css$Css$right(
							rtfeldman$elm_css$Css$px(22)),
							NoRedInk$datetimepicker_legacy$DateTimePicker$noYearNavigationStyle(config)
						])),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextMonth, config, state, currentDate)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextMonth, config, state, currentDate))
				]),
			_List_fromArray(
				[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$rightArrow]));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextYear = F2(
	function (config, state) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var updatedTitleDate = A2(
			elm$core$Maybe$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths(12),
			stateValue.titleDate);
		return config.onChange(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{event: 'nextYear', titleDate: updatedTitleDate})));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$DoubleRight = {$: 'DoubleRight'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleArrow = function (orientation) {
	var rotation = function () {
		if (orientation.$ === 'DoubleRight') {
			return '0';
		} else {
			return '180';
		}
	}();
	return A2(
		rtfeldman$elm_css$Svg$Styled$svg,
		_List_fromArray(
			[
				rtfeldman$elm_css$Svg$Styled$Attributes$width('16'),
				rtfeldman$elm_css$Svg$Styled$Attributes$height('12'),
				rtfeldman$elm_css$Svg$Styled$Attributes$viewBox('0 0 32 16'),
				rtfeldman$elm_css$Svg$Styled$Attributes$style('transform: rotate(' + (rotation + 'deg);'))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Svg$Styled$polygon,
				_List_fromArray(
					[
						rtfeldman$elm_css$Svg$Styled$Attributes$points('0 0, 0 20, 16 10')
					]),
				_List_Nil),
				A2(
				rtfeldman$elm_css$Svg$Styled$polygon,
				_List_fromArray(
					[
						rtfeldman$elm_css$Svg$Styled$Attributes$points('16 0, 16 20, 32 10')
					]),
				_List_Nil)
			]));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleRightArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleArrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$DoubleRight);
var NoRedInk$datetimepicker_legacy$DateTimePicker$nextYearButton = F3(
	function (config, state, currentDate) {
		return config.allowYearNavigation ? A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$arrowStyle,
							rtfeldman$elm_css$Css$right(
							rtfeldman$elm_css$Css$px(0))
						])),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextYear, config, state, currentDate)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoNextYear, config, state, currentDate))
				]),
			_List_fromArray(
				[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleRightArrow])) : rtfeldman$elm_css$Html$Styled$text('');
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Left = {$: 'Left'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$leftArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$arrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Left);
var NoRedInk$datetimepicker_legacy$DateTimePicker$previousButton = F3(
	function (config, state, currentDate) {
		return A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$arrowStyle,
							rtfeldman$elm_css$Css$left(
							rtfeldman$elm_css$Css$px(22)),
							NoRedInk$datetimepicker_legacy$DateTimePicker$noYearNavigationStyle(config)
						])),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousMonth, config, state, currentDate)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousMonth, config, state, currentDate))
				]),
			_List_fromArray(
				[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$leftArrow]));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousYear = F2(
	function (config, state) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var updatedTitleDate = A2(
			elm$core$Maybe$map,
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$addMonths(-12),
			stateValue.titleDate);
		return config.onChange(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{event: 'previousYear', titleDate: updatedTitleDate})));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$DoubleLeft = {$: 'DoubleLeft'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleLeftArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleArrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$DoubleLeft);
var NoRedInk$datetimepicker_legacy$DateTimePicker$previousYearButton = F3(
	function (config, state, currentDate) {
		return config.allowYearNavigation ? A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$arrowStyle,
							rtfeldman$elm_css$Css$left(
							rtfeldman$elm_css$Css$px(0))
						])),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousYear, config, state, currentDate)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$gotoPreviousYear, config, state, currentDate))
				]),
			_List_fromArray(
				[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$doubleLeftArrow])) : rtfeldman$elm_css$Html$Styled$text('');
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$switchMode = F2(
	function (config, state) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		return config.onChange(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				_Utils_update(
					stateValue,
					{event: 'title'})));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$titleFormatter = function (dateTime) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullMonth(dateTime.month) + (' ' + elm$core$String$fromInt(dateTime.year));
};
var rtfeldman$elm_css$Css$display = rtfeldman$elm_css$Css$prop1('display');
var rtfeldman$elm_css$Css$inlineBlock = {display: rtfeldman$elm_css$Css$Structure$Compatible, value: 'inline-block'};
var rtfeldman$elm_css$Css$PercentageUnits = {$: 'PercentageUnits'};
var rtfeldman$elm_css$Css$pct = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, rtfeldman$elm_css$Css$PercentageUnits, '%');
var NoRedInk$datetimepicker_legacy$DateTimePicker$title = F3(
	function (config, state, currentDate) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var date = stateValue.titleDate;
		return A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$borderBoxStyle,
							rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$inlineBlock),
							rtfeldman$elm_css$Css$width(
							rtfeldman$elm_css$Css$pct(100)),
							rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center)
						])),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$switchMode, config, state, currentDate))
				]),
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(
					A2(
						elm$core$Maybe$withDefault,
						'N/A',
						A2(elm$core$Maybe$map, NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$titleFormatter, date)))
				]));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$navigation = F3(
	function (config, state, currentDate) {
		return _List_fromArray(
			[
				A3(NoRedInk$datetimepicker_legacy$DateTimePicker$previousYearButton, config, state, currentDate),
				A3(NoRedInk$datetimepicker_legacy$DateTimePicker$previousButton, config, state, currentDate),
				A3(NoRedInk$datetimepicker_legacy$DateTimePicker$title, config, state, currentDate),
				A3(NoRedInk$datetimepicker_legacy$DateTimePicker$nextButton, config, state, currentDate),
				A3(NoRedInk$datetimepicker_legacy$DateTimePicker$nextYearButton, config, state, currentDate)
			]);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$footerFormatter = function (dateTime) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullDayOfWeek(dateTime) + (', ' + (NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$fullMonth(dateTime.month) + (' ' + (elm$core$String$fromInt(dateTime.day) + (', ' + elm$core$String$fromInt(dateTime.year))))));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$headerStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2(
			rtfeldman$elm_css$Css$padding2,
			rtfeldman$elm_css$Css$px(10),
			rtfeldman$elm_css$Css$px(7)),
			rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray)
		]));
var rtfeldman$elm_css$Css$block = {display: rtfeldman$elm_css$Css$Structure$Compatible, value: 'block'};
var rtfeldman$elm_css$Css$borderTop3 = rtfeldman$elm_css$Css$prop3('border-top');
var rtfeldman$elm_css$Css$float = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'float',
		'float',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$height = rtfeldman$elm_css$Css$prop1('height');
var rtfeldman$elm_css$Css$relative = {position: rtfeldman$elm_css$Css$Structure$Compatible, value: 'relative'};
var rtfeldman$elm_css$Html$Styled$div = rtfeldman$elm_css$Html$Styled$node('div');
var NoRedInk$datetimepicker_legacy$DateTimePicker$datePickerDialog = F3(
	function (pickerType, state, currentDate) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var html = function (config) {
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$float(rtfeldman$elm_css$Css$left)
							]))
					]),
				_List_fromArray(
					[
						A3(
						rtfeldman$elm_css$Html$Styled$node,
						'date-time-picker-header',
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$headerStyle,
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$borderBoxStyle,
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$headerStyle,
										rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block),
										rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
									]))
							]),
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$navigation, config, state, currentDate)),
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$calendar, pickerType, state, currentDate),
						A3(
						rtfeldman$elm_css$Html$Styled$node,
						'date-time-picker-footer',
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block),
										rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
										rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray),
										A2(
										rtfeldman$elm_css$Css$padding2,
										rtfeldman$elm_css$Css$px(7),
										rtfeldman$elm_css$Css$px(7)),
										A3(
										rtfeldman$elm_css$Css$borderTop3,
										rtfeldman$elm_css$Css$px(1),
										rtfeldman$elm_css$Css$solid,
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray),
										rtfeldman$elm_css$Css$height(
										rtfeldman$elm_css$Css$px(16))
									]))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(
								A2(
									elm$core$Maybe$withDefault,
									'--',
									A2(elm$core$Maybe$map, NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$footerFormatter, stateValue.date)))
							]))
					]));
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return html(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				return rtfeldman$elm_css$Html$Styled$text('');
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$dialogNode = function (attributes) {
	return A2(
		rtfeldman$elm_css$Html$Styled$node,
		'date-time-picker-dialog',
		_Utils_ap(
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block)
						]))
				]),
			attributes));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$onChangeHandler = F3(
	function (pickerType, stateValue, currentDate) {
		var withTimeHandler = function (config) {
			var _n1 = _Utils_Tuple2(
				_Utils_Tuple2(stateValue.date, stateValue.time.hour),
				_Utils_Tuple2(stateValue.time.minute, stateValue.time.amPm));
			if ((((_n1.a.a.$ === 'Just') && (_n1.a.b.$ === 'Just')) && (_n1.b.a.$ === 'Just')) && (_n1.b.b.$ === 'Just')) {
				var _n2 = _n1.a;
				var date = _n2.a.a;
				var hour = _n2.b.a;
				var _n3 = _n1.b;
				var minute = _n3.a.a;
				var amPm = _n3.b.a;
				return A2(
					config.onChange,
					NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(stateValue),
					elm$core$Maybe$Just(
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, date)));
			} else {
				return A2(
					config.onChange,
					NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(stateValue),
					elm$core$Maybe$Nothing);
			}
		};
		var justDateHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(stateValue),
				stateValue.date);
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return justDateHandler(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return withTimeHandler(config);
			default:
				var config = pickerType.a;
				return withTimeHandler(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime = F3(
	function (hour, minute, amPm) {
		return A5(
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts,
			0,
			elm$time$Time$Jan,
			1,
			A2(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toMillitary, hour, amPm),
			minute);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateCurrentDate = F2(
	function (pickerType, stateValue) {
		var updatedTime = function () {
			var _n4 = _Utils_Tuple3(stateValue.time.hour, stateValue.time.minute, stateValue.time.amPm);
			if (((_n4.a.$ === 'Just') && (_n4.b.$ === 'Just')) && (_n4.c.$ === 'Just')) {
				var hour = _n4.a.a;
				var minute = _n4.b.a;
				var amPm = _n4.c.a;
				return elm$core$Maybe$Just(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime, hour, minute, amPm));
			} else {
				return elm$core$Maybe$Nothing;
			}
		}();
		var updatedDateTime = function () {
			var _n1 = _Utils_Tuple2(
				_Utils_Tuple2(stateValue.date, stateValue.time.hour),
				_Utils_Tuple2(stateValue.time.minute, stateValue.time.amPm));
			if ((((_n1.a.a.$ === 'Just') && (_n1.a.b.$ === 'Just')) && (_n1.b.a.$ === 'Just')) && (_n1.b.b.$ === 'Just')) {
				var _n2 = _n1.a;
				var date = _n2.a.a;
				var hour = _n2.b.a;
				var _n3 = _n1.b;
				var minute = _n3.a.a;
				var amPm = _n3.b.a;
				return elm$core$Maybe$Just(
					A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, date));
			} else {
				return elm$core$Maybe$Nothing;
			}
		}();
		var updatedDate = stateValue.date;
		switch (pickerType.$) {
			case 'DateType':
				return updatedDate;
			case 'DateTimeType':
				return updatedDateTime;
			default:
				return updatedTime;
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateTimeIndicator = function (stateValue) {
	var _n0 = _Utils_Tuple2(
		_Utils_Tuple2(stateValue.activeTimeIndicator, stateValue.time.hour),
		_Utils_Tuple2(stateValue.time.minute, stateValue.time.amPm));
	if (_n0.a.a.$ === 'Just') {
		switch (_n0.a.a.a.$) {
			case 'HourIndicator':
				if (_n0.b.a.$ === 'Nothing') {
					var _n1 = _n0.a;
					var _n2 = _n1.a.a;
					var _n3 = _n0.b;
					var _n4 = _n3.a;
					return _Utils_update(
						stateValue,
						{
							activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator)
						});
				} else {
					if (_n0.b.b.$ === 'Nothing') {
						var _n5 = _n0.a;
						var _n6 = _n5.a.a;
						var _n7 = _n0.b;
						var _n8 = _n7.b;
						return _Utils_update(
							stateValue,
							{
								activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator)
							});
					} else {
						var _n9 = _n0.a;
						var _n10 = _n9.a.a;
						var _n11 = _n0.b;
						return _Utils_update(
							stateValue,
							{activeTimeIndicator: elm$core$Maybe$Nothing});
					}
				}
			case 'MinuteIndicator':
				if (_n0.b.b.$ === 'Nothing') {
					var _n12 = _n0.a;
					var _n13 = _n12.a.a;
					var _n14 = _n0.b;
					var _n15 = _n14.b;
					return _Utils_update(
						stateValue,
						{
							activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator)
						});
				} else {
					if (_n0.a.b.$ === 'Nothing') {
						var _n16 = _n0.a;
						var _n17 = _n16.a.a;
						var _n18 = _n16.b;
						var _n19 = _n0.b;
						return _Utils_update(
							stateValue,
							{
								activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator)
							});
					} else {
						var _n20 = _n0.a;
						var _n21 = _n20.a.a;
						var _n22 = _n0.b;
						return _Utils_update(
							stateValue,
							{activeTimeIndicator: elm$core$Maybe$Nothing});
					}
				}
			default:
				if (_n0.a.b.$ === 'Nothing') {
					var _n23 = _n0.a;
					var _n24 = _n23.a.a;
					var _n25 = _n23.b;
					var _n26 = _n0.b;
					return _Utils_update(
						stateValue,
						{
							activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator)
						});
				} else {
					if (_n0.b.a.$ === 'Nothing') {
						var _n27 = _n0.a;
						var _n28 = _n27.a.a;
						var _n29 = _n0.b;
						var _n30 = _n29.a;
						return _Utils_update(
							stateValue,
							{
								activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator)
							});
					} else {
						var _n31 = _n0.a;
						var _n32 = _n31.a.a;
						var _n33 = _n0.b;
						return _Utils_update(
							stateValue,
							{activeTimeIndicator: elm$core$Maybe$Nothing});
					}
				}
		}
	} else {
		if (_n0.a.b.$ === 'Nothing') {
			var _n34 = _n0.a;
			var _n35 = _n34.a;
			var _n36 = _n34.b;
			var _n37 = _n0.b;
			return _Utils_update(
				stateValue,
				{
					activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator)
				});
		} else {
			if (_n0.b.a.$ === 'Nothing') {
				var _n38 = _n0.a;
				var _n39 = _n38.a;
				var _n40 = _n0.b;
				var _n41 = _n40.a;
				return _Utils_update(
					stateValue,
					{
						activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator)
					});
			} else {
				if (_n0.b.b.$ === 'Nothing') {
					var _n42 = _n0.a;
					var _n43 = _n42.a;
					var _n44 = _n0.b;
					var _n45 = _n44.b;
					return _Utils_update(
						stateValue,
						{
							activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator)
						});
				} else {
					var _n46 = _n0.a;
					var _n47 = _n0.b;
					return _Utils_update(
						stateValue,
						{activeTimeIndicator: elm$core$Maybe$Nothing});
				}
			}
		}
	}
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$amPmPickerHandler = F5(
	function (pickerType, config, stateValue, currentDate, amPm) {
		var time = stateValue.time;
		var updatedTime = _Utils_update(
			time,
			{
				amPm: elm$core$Maybe$Just(amPm)
			});
		var updatedState = NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateTimeIndicator(
			_Utils_update(
				stateValue,
				{time: updatedTime}));
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateCurrentDate, pickerType, updatedState));
	});
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hours = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('1', (elm$core$Basics$pi * 2) / 6),
			_Utils_Tuple2('2', (elm$core$Basics$pi * 1) / 6),
			_Utils_Tuple2('3', elm$core$Basics$pi * 2),
			_Utils_Tuple2('4', (elm$core$Basics$pi * 11) / 6),
			_Utils_Tuple2('5', (elm$core$Basics$pi * 10) / 6),
			_Utils_Tuple2('6', (elm$core$Basics$pi * 9) / 6),
			_Utils_Tuple2('7', (elm$core$Basics$pi * 8) / 6),
			_Utils_Tuple2('8', (elm$core$Basics$pi * 7) / 6),
			_Utils_Tuple2('9', elm$core$Basics$pi),
			_Utils_Tuple2('10', (elm$core$Basics$pi * 5) / 6),
			_Utils_Tuple2('11', (elm$core$Basics$pi * 4) / 6),
			_Utils_Tuple2('12', elm$core$Basics$pi / 2)
		]));
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hourToAngle = function (hour) {
	return A2(
		elm$core$Dict$get,
		elm$core$String$fromInt(hour),
		NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hours);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutes = elm$core$Dict$fromList(
	A2(
		elm$core$List$map,
		function (minute) {
			return _Utils_Tuple2(
				elm$core$String$fromInt(minute),
				(elm$core$Basics$pi * (60 - A2(elm$core$Basics$modBy, 60, 45 + minute))) / 30);
		},
		A2(elm$core$List$range, 0, 59)));
var NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minuteToAngle = function (minute) {
	return A2(
		elm$core$Dict$get,
		elm$core$String$fromInt(minute),
		NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutes);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler = F4(
	function (config, stateValue, currentDate, timeIndicator) {
		var updatedActiveTimeIndicator = _Utils_eq(
			stateValue.activeTimeIndicator,
			elm$core$Maybe$Just(timeIndicator)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(timeIndicator);
		var currentAngle = function () {
			var _n0 = _Utils_Tuple3(timeIndicator, stateValue.time.hour, stateValue.time.minute);
			_n0$2:
			while (true) {
				switch (_n0.a.$) {
					case 'HourIndicator':
						if (_n0.b.$ === 'Just') {
							var _n1 = _n0.a;
							var hour = _n0.b.a;
							return NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hourToAngle(hour);
						} else {
							break _n0$2;
						}
					case 'MinuteIndicator':
						if (_n0.c.$ === 'Just') {
							var _n2 = _n0.a;
							var minute = _n0.c.a;
							return NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minuteToAngle(minute);
						} else {
							break _n0$2;
						}
					default:
						break _n0$2;
				}
			}
			return elm$core$Maybe$Nothing;
		}();
		var updatedState = _Utils_update(
			stateValue,
			{activeTimeIndicator: updatedActiveTimeIndicator, currentAngle: currentAngle});
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler = F4(
	function (pickerType, state, date, onChange) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var updatedDate = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateCurrentDate, pickerType, stateValue);
		var updatedStateValue = function () {
			var _n0 = _Utils_Tuple2(updatedDate, stateValue.activeTimeIndicator);
			_n0$0:
			while (true) {
				_n0$3:
				while (true) {
					if (_n0.b.$ === 'Just') {
						switch (_n0.b.a.$) {
							case 'HourIndicator':
								if (_n0.a.$ === 'Just') {
									break _n0$0;
								} else {
									var _n1 = _n0.b.a;
									return _Utils_update(
										stateValue,
										{
											activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator),
											currentAngle: elm$core$Maybe$Nothing,
											event: 'analog.mouseDownHandler'
										});
								}
							case 'MinuteIndicator':
								if (_n0.a.$ === 'Just') {
									break _n0$0;
								} else {
									var _n2 = _n0.b.a;
									return _Utils_update(
										stateValue,
										{
											activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator),
											currentAngle: elm$core$Maybe$Nothing,
											event: 'analog.mouseDownHandler'
										});
								}
							default:
								if (_n0.a.$ === 'Just') {
									break _n0$0;
								} else {
									break _n0$3;
								}
						}
					} else {
						if (_n0.a.$ === 'Just') {
							break _n0$0;
						} else {
							break _n0$3;
						}
					}
				}
				return _Utils_update(
					stateValue,
					{
						activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator),
						currentAngle: elm$core$Maybe$Nothing,
						event: 'analog.mouseDownHandler'
					});
			}
			return _Utils_update(
				stateValue,
				{activeTimeIndicator: elm$core$Maybe$Nothing, currentAngle: elm$core$Maybe$Nothing, event: 'analog.mouseDownHandler'});
		}();
		return A2(
			onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
				NoRedInk$datetimepicker_legacy$DateTimePicker$Helpers$updateTimeIndicator(stateValue)),
			updatedDate);
	});
var rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerUp = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'pointerup',
		elm$json$Json$Decode$succeed(msg));
};
var rtfeldman$elm_css$Svg$Styled$line = rtfeldman$elm_css$Svg$Styled$node('line');
var rtfeldman$elm_css$Svg$Styled$Attributes$stroke = rtfeldman$elm_css$VirtualDom$Styled$attribute('stroke');
var rtfeldman$elm_css$Svg$Styled$Attributes$strokeWidth = rtfeldman$elm_css$VirtualDom$Styled$attribute('stroke-width');
var rtfeldman$elm_css$Svg$Styled$Attributes$x1 = rtfeldman$elm_css$VirtualDom$Styled$attribute('x1');
var rtfeldman$elm_css$Svg$Styled$Attributes$x2 = rtfeldman$elm_css$VirtualDom$Styled$attribute('x2');
var rtfeldman$elm_css$Svg$Styled$Attributes$y1 = rtfeldman$elm_css$VirtualDom$Styled$attribute('y1');
var rtfeldman$elm_css$Svg$Styled$Attributes$y2 = rtfeldman$elm_css$VirtualDom$Styled$attribute('y2');
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$drawArrow = F5(
	function (pickerType, onChange, state, date, point) {
		return A2(
			rtfeldman$elm_css$Svg$Styled$line,
			_List_fromArray(
				[
					rtfeldman$elm_css$Svg$Styled$Attributes$x1('100'),
					rtfeldman$elm_css$Svg$Styled$Attributes$y1('100'),
					rtfeldman$elm_css$Svg$Styled$Attributes$x2(
					elm$core$String$fromInt(point.x)),
					rtfeldman$elm_css$Svg$Styled$Attributes$y2(
					elm$core$String$fromInt(point.y)),
					rtfeldman$elm_css$Svg$Styled$Attributes$strokeWidth('2px'),
					rtfeldman$elm_css$Svg$Styled$Attributes$stroke('#aaa'),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerUp(
					A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange))
				]),
			_List_Nil);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$hourArrowLength = 50;
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$minuteArrowLength = 70;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Point = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Point, 100, 100);
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$round = _Basics_round;
var elm$core$Basics$sin = _Basics_sin;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateArrowPoint = F3(
	function (origin, length, radians) {
		var y = elm$core$Basics$round(
			length * elm$core$Basics$sin(radians));
		var x = elm$core$Basics$round(
			length * elm$core$Basics$cos(radians));
		return {x: origin.x + x, y: origin.y - y};
	});
var rtfeldman$elm_css$Svg$Styled$text = rtfeldman$elm_css$VirtualDom$Styled$text;
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$arrow = F4(
	function (pickerType, onChange, state, date) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var length = function () {
			var _n5 = stateValue.activeTimeIndicator;
			_n5$2:
			while (true) {
				if (_n5.$ === 'Just') {
					switch (_n5.a.$) {
						case 'HourIndicator':
							var _n6 = _n5.a;
							return NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$hourArrowLength;
						case 'MinuteIndicator':
							var _n7 = _n5.a;
							return NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$minuteArrowLength;
						default:
							break _n5$2;
					}
				} else {
					break _n5$2;
				}
			}
			return 0;
		}();
		var isJust = function (maybe) {
			if (maybe.$ === 'Just') {
				return true;
			} else {
				return false;
			}
		};
		var shouldDrawArrow = function () {
			var _n1 = stateValue.activeTimeIndicator;
			_n1$2:
			while (true) {
				if (_n1.$ === 'Just') {
					switch (_n1.a.$) {
						case 'HourIndicator':
							var _n2 = _n1.a;
							return isJust(stateValue.time.hour);
						case 'MinuteIndicator':
							var _n3 = _n1.a;
							return isJust(stateValue.time.minute);
						default:
							break _n1$2;
					}
				} else {
					break _n1$2;
				}
			}
			return false;
		}();
		var arrowPoint = function (angle) {
			return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateArrowPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint, length, angle);
		};
		var _n0 = stateValue.currentAngle;
		if (_n0.$ === 'Nothing') {
			return rtfeldman$elm_css$Svg$Styled$text('');
		} else {
			var angle = _n0.a;
			return shouldDrawArrow ? A5(
				NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$drawArrow,
				pickerType,
				onChange,
				state,
				date,
				arrowPoint(angle)) : rtfeldman$elm_css$Svg$Styled$text('');
		}
	});
var rtfeldman$elm_css$Svg$Styled$text_ = rtfeldman$elm_css$Svg$Styled$node('text');
var rtfeldman$elm_css$Svg$Styled$Attributes$dominantBaseline = rtfeldman$elm_css$VirtualDom$Styled$attribute('dominant-baseline');
var rtfeldman$elm_css$Svg$Styled$Attributes$textAnchor = rtfeldman$elm_css$VirtualDom$Styled$attribute('text-anchor');
var rtfeldman$elm_css$Svg$Styled$Attributes$x = rtfeldman$elm_css$VirtualDom$Styled$attribute('x');
var rtfeldman$elm_css$Svg$Styled$Attributes$y = rtfeldman$elm_css$VirtualDom$Styled$attribute('y');
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$clockFace = F5(
	function (pickerType, onChange, state, date, _n0) {
		var number = _n0.a;
		var radians = _n0.b;
		var point = A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateArrowPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint, 85, radians);
		return A2(
			rtfeldman$elm_css$Svg$Styled$text_,
			_List_fromArray(
				[
					rtfeldman$elm_css$Svg$Styled$Attributes$x(
					elm$core$String$fromInt(point.x)),
					rtfeldman$elm_css$Svg$Styled$Attributes$y(
					elm$core$String$fromInt(point.y)),
					rtfeldman$elm_css$Svg$Styled$Attributes$textAnchor('middle'),
					rtfeldman$elm_css$Svg$Styled$Attributes$dominantBaseline('central'),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerUp(
					A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange))
				]),
			_List_fromArray(
				[
					rtfeldman$elm_css$Svg$Styled$text(number)
				]));
	});
var rtfeldman$elm_css$Svg$Styled$g = rtfeldman$elm_css$Svg$Styled$node('g');
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$currentTime = F4(
	function (pickerType, onChange, state, date) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var time = stateValue.time;
		var drawMinute = function (minute) {
			return A2(
				elm$core$Maybe$withDefault,
				rtfeldman$elm_css$Svg$Styled$text(''),
				A2(
					elm$core$Maybe$map,
					A2(
						elm$core$Basics$composeR,
						A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateArrowPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$minuteArrowLength),
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$drawArrow, pickerType, onChange, state, date)),
					A2(
						elm$core$Dict$get,
						elm$core$String$fromInt(minute),
						NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutes)));
		};
		var drawHour = F2(
			function (hour, minute) {
				return A2(
					elm$core$Maybe$withDefault,
					rtfeldman$elm_css$Svg$Styled$text(''),
					A2(
						elm$core$Maybe$map,
						A2(
							elm$core$Basics$composeR,
							A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateArrowPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint, NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$hourArrowLength),
							A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$drawArrow, pickerType, onChange, state, date)),
						A2(
							elm$core$Maybe$map,
							function (a) {
								return a - ((minute * elm$core$Basics$pi) / 360);
							},
							A2(
								elm$core$Dict$get,
								elm$core$String$fromInt(hour),
								NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hours))));
			});
		var _n0 = _Utils_Tuple2(
			_Utils_Tuple2(stateValue.activeTimeIndicator, time.hour),
			_Utils_Tuple2(time.minute, time.amPm));
		if ((((_n0.a.a.$ === 'Nothing') && (_n0.a.b.$ === 'Just')) && (_n0.b.a.$ === 'Just')) && (_n0.b.b.$ === 'Just')) {
			var _n1 = _n0.a;
			var _n2 = _n1.a;
			var hour = _n1.b.a;
			var _n3 = _n0.b;
			var minute = _n3.a.a;
			return A2(
				rtfeldman$elm_css$Svg$Styled$g,
				_List_Nil,
				_List_fromArray(
					[
						A2(drawHour, hour, minute),
						drawMinute(minute)
					]));
		} else {
			return rtfeldman$elm_css$Svg$Styled$text('');
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$axisPoint = A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Point, 200, 100);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant1 = {$: 'Quadrant1'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant2 = {$: 'Quadrant2'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant3 = {$: 'Quadrant3'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant4 = {$: 'Quadrant4'};
var elm$core$Basics$acos = _Basics_acos;
var elm$core$Basics$sqrt = _Basics_sqrt;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateAngle = F3(
	function (p1, p2, p3) {
		var quadrant = ((_Utils_cmp(p3.x, p1.x) > -1) && (_Utils_cmp(p3.y, p1.y) > -1)) ? NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant1 : (((_Utils_cmp(p3.x, p1.x) < 0) && (_Utils_cmp(p3.y, p1.y) > -1)) ? NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant2 : (((_Utils_cmp(p3.x, p1.x) < 0) && (_Utils_cmp(p3.y, p1.y) < 0)) ? NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant3 : NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Quadrant4));
		var p23 = elm$core$Basics$sqrt(
			A2(elm$core$Basics$pow, p2.x - p3.x, 2) + A2(elm$core$Basics$pow, p2.y - p3.y, 2));
		var p13 = elm$core$Basics$sqrt(
			A2(elm$core$Basics$pow, p1.x - p3.x, 2) + A2(elm$core$Basics$pow, p1.y - p3.y, 2));
		var p12 = elm$core$Basics$sqrt(
			A2(elm$core$Basics$pow, p1.x - p2.x, 2) + A2(elm$core$Basics$pow, p1.y - p2.y, 2));
		var angle = elm$core$Basics$acos(
			((A2(elm$core$Basics$pow, p12, 2) + A2(elm$core$Basics$pow, p13, 2)) - A2(elm$core$Basics$pow, p23, 2)) / ((2 * p12) * p13));
		switch (quadrant.$) {
			case 'Quadrant3':
				return angle;
			case 'Quadrant4':
				return angle;
			case 'Quadrant1':
				return (2 * elm$core$Basics$pi) - angle;
			default:
				return (2 * elm$core$Basics$pi) - angle;
		}
	});
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$List$sortBy = _List_sortBy;
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$updateHourState = F3(
	function (stateValue, date, moveData) {
		var updateTime = F2(
			function (time, hour) {
				return _Utils_update(
					time,
					{
						hour: A2(elm$core$Maybe$andThen, elm$core$String$toInt, hour)
					});
			});
		var currentAngle = A3(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateAngle,
			NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint,
			NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$axisPoint,
			A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Point, moveData.offsetX, moveData.offsetY));
		var closestHour = A2(
			elm$core$Maybe$map,
			elm$core$Tuple$first,
			elm$core$List$head(
				A2(
					elm$core$List$sortBy,
					elm$core$Tuple$second,
					A2(
						elm$core$List$map,
						function (_n0) {
							var hour = _n0.a;
							var radians = _n0.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(hour, radians),
								elm$core$Basics$abs(radians - currentAngle));
						},
						elm$core$Dict$toList(NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hours)))));
		return NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
			_Utils_update(
				stateValue,
				{
					currentAngle: A2(elm$core$Maybe$map, elm$core$Tuple$second, closestHour),
					time: A2(
						updateTime,
						stateValue.time,
						A2(elm$core$Maybe$map, elm$core$Tuple$first, closestHour))
				}));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$updateMinuteState = F3(
	function (stateValue, date, moveData) {
		var updateTime = F2(
			function (time, minute) {
				return _Utils_update(
					time,
					{
						minute: A2(elm$core$Maybe$andThen, elm$core$String$toInt, minute)
					});
			});
		var currentAngle = A3(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$calculateAngle,
			NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$originPoint,
			NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$axisPoint,
			A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Geometry$Point, moveData.offsetX, moveData.offsetY));
		var closestMinute = A2(
			elm$core$Maybe$map,
			elm$core$Tuple$first,
			elm$core$List$head(
				A2(
					elm$core$List$sortBy,
					elm$core$Tuple$second,
					A2(
						elm$core$List$map,
						function (_n0) {
							var minute = _n0.a;
							var radians = _n0.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(minute, radians),
								elm$core$Basics$abs(radians - currentAngle));
						},
						elm$core$Dict$toList(NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutes)))));
		return NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
			_Utils_update(
				stateValue,
				{
					currentAngle: A2(elm$core$Maybe$map, elm$core$Tuple$second, closestMinute),
					time: A2(
						updateTime,
						stateValue.time,
						A2(elm$core$Maybe$map, elm$core$Tuple$first, closestMinute))
				}));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseOverHandler = F4(
	function (state, date, onChange, moveData) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var decoder = function (updatedState) {
			return elm$json$Json$Decode$succeed(
				A2(onChange, updatedState, date));
		};
		var _n0 = stateValue.activeTimeIndicator;
		_n0$2:
		while (true) {
			if (_n0.$ === 'Just') {
				switch (_n0.a.$) {
					case 'HourIndicator':
						var _n1 = _n0.a;
						return decoder(
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$updateHourState, stateValue, date, moveData));
					case 'MinuteIndicator':
						var _n2 = _n0.a;
						return decoder(
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$updateMinuteState, stateValue, date, moveData));
					default:
						break _n0$2;
				}
			} else {
				break _n0$2;
			}
		}
		return decoder(
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(stateValue));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutesPerFive = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('5', (elm$core$Basics$pi * 2) / 6),
			_Utils_Tuple2('10', (elm$core$Basics$pi * 1) / 6),
			_Utils_Tuple2('15', elm$core$Basics$pi * 2),
			_Utils_Tuple2('20', (elm$core$Basics$pi * 11) / 6),
			_Utils_Tuple2('25', (elm$core$Basics$pi * 10) / 6),
			_Utils_Tuple2('30', (elm$core$Basics$pi * 9) / 6),
			_Utils_Tuple2('35', (elm$core$Basics$pi * 8) / 6),
			_Utils_Tuple2('40', (elm$core$Basics$pi * 7) / 6),
			_Utils_Tuple2('45', elm$core$Basics$pi),
			_Utils_Tuple2('50', (elm$core$Basics$pi * 5) / 6),
			_Utils_Tuple2('55', (elm$core$Basics$pi * 4) / 6),
			_Utils_Tuple2('0', elm$core$Basics$pi / 2)
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$MoveData = F2(
	function (offsetX, offsetY) {
		return {offsetX: offsetX, offsetY: offsetY};
	});
var elm$json$Json$Decode$float = _Json_decodeFloat;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$mouseMoveDecoder = A3(
	elm$json$Json$Decode$map2,
	NoRedInk$datetimepicker_legacy$DateTimePicker$Events$MoveData,
	A2(
		elm$json$Json$Decode$map,
		elm$core$Basics$round,
		A2(elm$json$Json$Decode$field, 'offsetX', elm$json$Json$Decode$float)),
	A2(
		elm$json$Json$Decode$map,
		elm$core$Basics$round,
		A2(elm$json$Json$Decode$field, 'offsetY', elm$json$Json$Decode$float)));
var elm$json$Json$Decode$andThen = _Json_andThen;
var rtfeldman$elm_css$Svg$Styled$Events$on = rtfeldman$elm_css$Html$Styled$Events$on;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseMoveWithPosition = function (decoder) {
	return A2(
		rtfeldman$elm_css$Svg$Styled$Events$on,
		'mousemove',
		A2(elm$json$Json$Decode$andThen, decoder, NoRedInk$datetimepicker_legacy$DateTimePicker$Events$mouseMoveDecoder));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerMoveWithPosition = function (decoder) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'pointermove',
		A2(elm$json$Json$Decode$andThen, decoder, NoRedInk$datetimepicker_legacy$DateTimePicker$Events$mouseMoveDecoder));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchMovePreventDefault = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$custom,
		'touchstart',
		elm$json$Json$Decode$succeed(
			{message: msg, preventDefault: true, stopPropagation: true}));
};
var rtfeldman$elm_css$Svg$Styled$circle = rtfeldman$elm_css$Svg$Styled$node('circle');
var rtfeldman$elm_css$Svg$Styled$Attributes$cx = rtfeldman$elm_css$VirtualDom$Styled$attribute('cx');
var rtfeldman$elm_css$Svg$Styled$Attributes$cy = rtfeldman$elm_css$VirtualDom$Styled$attribute('cy');
var rtfeldman$elm_css$Svg$Styled$Attributes$fill = rtfeldman$elm_css$VirtualDom$Styled$attribute('fill');
var rtfeldman$elm_css$Svg$Styled$Attributes$r = rtfeldman$elm_css$VirtualDom$Styled$attribute('r');
var NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$clock = F4(
	function (pickerType, onChange, state, date) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Svg$Styled$svg,
					_List_fromArray(
						[
							rtfeldman$elm_css$Svg$Styled$Attributes$width('200'),
							rtfeldman$elm_css$Svg$Styled$Attributes$height('200'),
							rtfeldman$elm_css$Svg$Styled$Attributes$viewBox('0 0 200 200')
						]),
					_List_fromArray(
						[
							A2(
							rtfeldman$elm_css$Svg$Styled$circle,
							_List_fromArray(
								[
									rtfeldman$elm_css$Svg$Styled$Attributes$cx('100'),
									rtfeldman$elm_css$Svg$Styled$Attributes$cy('100'),
									rtfeldman$elm_css$Svg$Styled$Attributes$r('100'),
									rtfeldman$elm_css$Svg$Styled$Attributes$fill('#eee'),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
									A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerUp(
									A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseDownHandler, pickerType, state, date, onChange)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseMoveWithPosition(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseOverHandler, state, date, onChange)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchMovePreventDefault(
									A2(onChange, state, date)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onPointerMoveWithPosition(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$mouseOverHandler, state, date, onChange))
								]),
							_List_Nil),
							function () {
							var _n0 = stateValue.activeTimeIndicator;
							if ((_n0.$ === 'Just') && (_n0.a.$ === 'MinuteIndicator')) {
								var _n1 = _n0.a;
								return A2(
									rtfeldman$elm_css$Svg$Styled$g,
									_List_Nil,
									A2(
										elm$core$List$map,
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$clockFace, pickerType, onChange, state, date),
										elm$core$Dict$toList(NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$minutesPerFive)));
							} else {
								return A2(
									rtfeldman$elm_css$Svg$Styled$g,
									_List_Nil,
									A2(
										elm$core$List$map,
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$clockFace, pickerType, onChange, state, date),
										elm$core$Dict$toList(NoRedInk$datetimepicker_legacy$DateTimePicker$ClockUtils$hours)));
							}
						}(),
							A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$arrow, pickerType, onChange, state, date),
							A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$currentTime, pickerType, onChange, state, date)
						]))
				]));
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$padding = function (str) {
	return (!elm$core$String$length(str)) ? '00' : ((elm$core$String$length(str) === 1) ? ('0' + str) : str);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$activeStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$backgroundColor(
			rtfeldman$elm_css$Css$hex('#e0e0e0')),
			NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle
		]));
var rtfeldman$elm_css$Css$EmUnits = {$: 'EmUnits'};
var rtfeldman$elm_css$Css$em = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, rtfeldman$elm_css$Css$EmUnits, 'em');
var rtfeldman$elm_css$Css$fontSize = rtfeldman$elm_css$Css$prop1('font-size');
var rtfeldman$elm_css$Css$margin2 = rtfeldman$elm_css$Css$prop2('margin');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$amPmStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$em(1.2)),
			A2(
			rtfeldman$elm_css$Css$padding2,
			rtfeldman$elm_css$Css$em(1),
			rtfeldman$elm_css$Css$em(0)),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
			A2(
			rtfeldman$elm_css$Css$margin2,
			rtfeldman$elm_css$Css$px(0),
			rtfeldman$elm_css$Css$auto),
			rtfeldman$elm_css$Css$width(
			rtfeldman$elm_css$Css$px(85)),
			rtfeldman$elm_css$Css$hover(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightedDay)
				]))
		]));
var rtfeldman$elm_css$Css$marginBottom = rtfeldman$elm_css$Css$prop1('margin-bottom');
var rtfeldman$elm_css$Css$marginTop = rtfeldman$elm_css$Css$prop1('margin-top');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timeHeaderStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2(
			rtfeldman$elm_css$Css$padding2,
			rtfeldman$elm_css$Css$px(3),
			rtfeldman$elm_css$Css$px(10)),
			rtfeldman$elm_css$Css$marginTop(
			rtfeldman$elm_css$Css$px(3)),
			rtfeldman$elm_css$Css$marginBottom(
			rtfeldman$elm_css$Css$px(3)),
			rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$inlineBlock),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
		]));
var rtfeldman$elm_css$Css$borderLeft3 = rtfeldman$elm_css$Css$prop3('border-left');
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timePickerDialog = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$float(rtfeldman$elm_css$Css$left),
			rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
			A3(
			rtfeldman$elm_css$Css$borderLeft3,
			rtfeldman$elm_css$Css$px(1),
			rtfeldman$elm_css$Css$solid,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray)
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$analogTimePickerDialog = F3(
	function (pickerType, state, currentDate) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var isActive = function (timeIndicator) {
			return _Utils_eq(
				stateValue.activeTimeIndicator,
				elm$core$Maybe$Just(timeIndicator)) ? _List_fromArray(
				[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$activeStyle]) : _List_Nil;
		};
		var highlighted = _List_fromArray(
			[
				NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle,
				rtfeldman$elm_css$Css$hover(
				_List_fromArray(
					[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle]))
			]);
		var amPmPicker = function (config) {
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Css$padding2,
								rtfeldman$elm_css$Css$px(40),
								rtfeldman$elm_css$Css$px(0))
							]))
					]),
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
								A5(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmPickerHandler, pickerType, config, stateValue, currentDate, 'AM')),
								NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
								A5(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmPickerHandler, pickerType, config, stateValue, currentDate, 'AM')),
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$amPmStyle])),
								function () {
								var _n3 = stateValue.time.amPm;
								if ((_n3.$ === 'Just') && (_n3.a === 'AM')) {
									return rtfeldman$elm_css$Html$Styled$Attributes$css(highlighted);
								} else {
									return rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
								}
							}()
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text('AM')
							])),
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
								A5(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmPickerHandler, pickerType, config, stateValue, currentDate, 'PM')),
								NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
								A5(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmPickerHandler, pickerType, config, stateValue, currentDate, 'PM')),
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$amPmStyle])),
								function () {
								var _n4 = stateValue.time.amPm;
								if ((_n4.$ === 'Just') && (_n4.a === 'PM')) {
									return rtfeldman$elm_css$Html$Styled$Attributes$css(highlighted);
								} else {
									return rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
								}
							}()
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text('PM')
							]))
					]));
		};
		var html = function (config) {
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timePickerDialog,
								rtfeldman$elm_css$Css$width(
								rtfeldman$elm_css$Css$px(230))
							]))
					]),
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$headerStyle,
										rtfeldman$elm_css$Css$fontSize(
										rtfeldman$elm_css$Css$em(1.2))
									]))
							]),
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$span,
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator)),
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator)),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timeHeaderStyle])),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										isActive(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator))
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text(
										A2(
											elm$core$Maybe$withDefault,
											'--',
											A2(
												elm$core$Maybe$map,
												A2(elm$core$Basics$composeR, elm$core$String$fromInt, NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$padding),
												stateValue.time.hour)))
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$span,
								_List_Nil,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text(' : ')
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$span,
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator)),
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator)),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timeHeaderStyle])),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										isActive(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$MinuteIndicator))
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text(
										A2(
											elm$core$Maybe$withDefault,
											'--',
											A2(
												elm$core$Maybe$map,
												A2(elm$core$Basics$composeR, elm$core$String$fromInt, NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$padding),
												stateValue.time.minute)))
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$span,
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator)),
										NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
										A4(NoRedInk$datetimepicker_legacy$DateTimePicker$timeIndicatorHandler, config, stateValue, currentDate, NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator)),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timeHeaderStyle])),
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										isActive(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$AMPMIndicator))
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text(
										A2(elm$core$Maybe$withDefault, '--', stateValue.time.amPm))
									]))
							])),
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$backgroundColor(
										rtfeldman$elm_css$Css$hex('#fff')),
										A2(
										rtfeldman$elm_css$Css$padding2,
										rtfeldman$elm_css$Css$px(12),
										rtfeldman$elm_css$Css$px(15)),
										rtfeldman$elm_css$Css$height(
										rtfeldman$elm_css$Css$px(202))
									]))
							]),
						_List_fromArray(
							[
								function () {
								var _n1 = stateValue.activeTimeIndicator;
								if ((_n1.$ === 'Just') && (_n1.a.$ === 'AMPMIndicator')) {
									var _n2 = _n1.a;
									return amPmPicker(config);
								} else {
									return A4(NoRedInk$datetimepicker_legacy$DateTimePicker$AnalogClock$clock, pickerType, config.onChange, state, currentDate);
								}
							}()
							]))
					]));
		};
		switch (pickerType.$) {
			case 'DateType':
				return rtfeldman$elm_css$Html$Styled$text('');
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				var config = pickerType.a;
				return html(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$amPmClickHandler = F3(
	function (pickerType, stateValue, amPm) {
		var time = stateValue.time;
		var updatedStateValue = _Utils_update(
			stateValue,
			{
				event: 'amPmClickHandler',
				time: _Utils_update(
					time,
					{
						amPm: elm$core$String$isEmpty(amPm) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(amPm)
					})
			});
		var _n0 = function () {
			var _n1 = _Utils_Tuple3(stateValue.time.hour, stateValue.time.minute, stateValue.date);
			if (((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) && (_n1.c.$ === 'Just')) {
				var hour = _n1.a.a;
				var minute = _n1.b.a;
				var date = _n1.c.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, date)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedDate = _n0.a;
		var forceCloseWithDate = _n0.b;
		var withDateHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseWithDate})),
				updatedDate);
		};
		var _n2 = function () {
			var _n3 = _Utils_Tuple2(updatedStateValue.time.hour, updatedStateValue.time.minute);
			if ((_n3.a.$ === 'Just') && (_n3.b.$ === 'Just')) {
				var hour = _n3.a.a;
				var minute = _n3.b.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime, hour, minute, amPm)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedTime = _n2.a;
		var forceCloseTimeOnly = _n2.b;
		var justTimeHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseTimeOnly})),
				updatedTime);
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return withDateHandler(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return withDateHandler(config);
			default:
				var config = pickerType.a;
				return justTimeHandler(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$hourClickHandler = F3(
	function (pickerType, stateValue, hour) {
		var time = stateValue.time;
		var updatedStateValue = _Utils_update(
			stateValue,
			{
				event: 'hourClickHandler',
				time: _Utils_update(
					time,
					{
						hour: elm$core$Maybe$Just(hour)
					})
			});
		var _n0 = function () {
			var _n1 = _Utils_Tuple3(stateValue.time.minute, stateValue.time.amPm, stateValue.date);
			if (((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) && (_n1.c.$ === 'Just')) {
				var minute = _n1.a.a;
				var amPm = _n1.b.a;
				var date = _n1.c.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, date)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedDate = _n0.a;
		var forceCloseWithDate = _n0.b;
		var withDateHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseWithDate})),
				updatedDate);
		};
		var _n2 = function () {
			var _n3 = _Utils_Tuple2(updatedStateValue.time.minute, updatedStateValue.time.amPm);
			if ((_n3.a.$ === 'Just') && (_n3.b.$ === 'Just')) {
				var minute = _n3.a.a;
				var amPm = _n3.b.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime, hour, minute, amPm)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedTime = _n2.a;
		var forceCloseTimeOnly = _n2.b;
		var justTimeHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseTimeOnly})),
				updatedTime);
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return withDateHandler(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return withDateHandler(config);
			default:
				var config = pickerType.a;
				return justTimeHandler(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$hourDownHandler = F3(
	function (config, stateValue, currentDate) {
		var updatedState = ((stateValue.hourPickerStart + 6) <= 12) ? _Utils_update(
			stateValue,
			{hourPickerStart: stateValue.hourPickerStart + 6}) : stateValue;
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$hourUpHandler = F3(
	function (config, stateValue, currentDate) {
		var updatedState = ((stateValue.hourPickerStart - 6) >= 1) ? _Utils_update(
			stateValue,
			{hourPickerStart: stateValue.hourPickerStart - 6}) : stateValue;
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$minuteClickHandler = F3(
	function (pickerType, stateValue, minute) {
		var time = stateValue.time;
		var updatedStateValue = _Utils_update(
			stateValue,
			{
				event: 'minuteClickHandler',
				time: _Utils_update(
					time,
					{
						minute: elm$core$Maybe$Just(minute)
					})
			});
		var _n0 = function () {
			var _n1 = _Utils_Tuple3(stateValue.time.hour, stateValue.time.amPm, stateValue.date);
			if (((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) && (_n1.c.$ === 'Just')) {
				var hour = _n1.a.a;
				var amPm = _n1.b.a;
				var date = _n1.c.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$setTime, hour, minute, amPm, date)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedDate = _n0.a;
		var forceCloseWithDate = _n0.b;
		var withDateHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseWithDate})),
				updatedDate);
		};
		var _n2 = function () {
			var _n3 = _Utils_Tuple2(updatedStateValue.time.hour, updatedStateValue.time.amPm);
			if ((_n3.a.$ === 'Just') && (_n3.b.$ === 'Just')) {
				var hour = _n3.a.a;
				var amPm = _n3.b.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime, hour, minute, amPm)),
					true);
			} else {
				return _Utils_Tuple2(elm$core$Maybe$Nothing, false);
			}
		}();
		var updatedTime = _n2.a;
		var forceCloseTimeOnly = _n2.b;
		var justTimeHandler = function (config) {
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
					_Utils_update(
						updatedStateValue,
						{forceClose: forceCloseTimeOnly})),
				updatedTime);
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return withDateHandler(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return withDateHandler(config);
			default:
				var config = pickerType.a;
				return justTimeHandler(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$minuteDownHandler = F3(
	function (config, stateValue, currentDate) {
		var updatedState = ((stateValue.minutePickerStart + 6) <= 59) ? _Utils_update(
			stateValue,
			{minutePickerStart: stateValue.minutePickerStart + 6}) : stateValue;
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$minuteUpHandler = F3(
	function (config, stateValue, currentDate) {
		var updatedState = ((stateValue.minutePickerStart - 6) >= 0) ? _Utils_update(
			stateValue,
			{minutePickerStart: stateValue.minutePickerStart - 6}) : stateValue;
		return A2(
			config.onChange,
			NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedState),
			currentDate);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero = function (input) {
	return (input < 10) ? ('0' + elm$core$String$fromInt(input)) : elm$core$String$fromInt(input);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$timeFormatter = function (dateTime) {
	var _n0 = (dateTime.hour === 12) ? _Utils_Tuple2('12', 'pm') : ((!dateTime.hour) ? _Utils_Tuple2('12', 'am') : ((dateTime.hour > 12) ? _Utils_Tuple2(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero(
			A2(elm$core$Basics$modBy, 12, dateTime.hour)),
		'pm') : _Utils_Tuple2(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero(dateTime.hour),
		'am')));
	var hourString = _n0.a;
	var amPm = _n0.b;
	return hourString + (':' + (NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero(dateTime.minute) + (' ' + amPm)));
};
var rtfeldman$elm_css$Css$unset = _Utils_update(
	rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$emptyCellStyle = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$hover(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$unset)
				])),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$unset)
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Down = {$: 'Down'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$downArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$arrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Down);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Up = {$: 'Up'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$upArrow = NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$arrow(NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$Up);
var elm$core$List$map3 = _List_map3;
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var rtfeldman$elm_css$Css$top = rtfeldman$elm_css$Css$prop1('top');
var rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$Global$table = rtfeldman$elm_css$Css$Global$typeSelector('table');
var rtfeldman$elm_css$Css$Global$tr = rtfeldman$elm_css$Css$Global$typeSelector('tr');
var rtfeldman$elm_css$Html$Styled$li = rtfeldman$elm_css$Html$Styled$node('li');
var rtfeldman$elm_css$Html$Styled$styled = F4(
	function (fn, styles, attrs, children) {
		return A2(
			fn,
			A2(
				elm$core$List$cons,
				rtfeldman$elm_css$Html$Styled$Internal$css(styles),
				attrs),
			children);
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$digitalTimePickerDialog = F3(
	function (pickerType, state, currentDate) {
		var upArrowTd = A2(
			rtfeldman$elm_css$Html$Styled$styled,
			rtfeldman$elm_css$Html$Styled$td,
			_List_fromArray(
				[
					A3(
					rtfeldman$elm_css$Css$borderBottom3,
					rtfeldman$elm_css$Css$px(1),
					rtfeldman$elm_css$Css$solid,
					NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray)
				]));
		var toListItem = function (str) {
			return A2(
				rtfeldman$elm_css$Html$Styled$li,
				_List_Nil,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(str)
					]));
		};
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var upArrows = function (config) {
			return _List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$tr,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray)
								]))
						]),
					_List_fromArray(
						[
							A2(
							upArrowTd,
							_List_fromArray(
								[
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourUpHandler, config, stateValue, currentDate)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourUpHandler, config, stateValue, currentDate))
								]),
							_List_fromArray(
								[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$upArrow])),
							A2(
							upArrowTd,
							_List_fromArray(
								[
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteUpHandler, config, stateValue, currentDate)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteUpHandler, config, stateValue, currentDate))
								]),
							_List_fromArray(
								[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$upArrow])),
							A2(upArrowTd, _List_Nil, _List_Nil)
						]))
				]);
		};
		var minutes = A2(elm$core$List$range, stateValue.minutePickerStart, stateValue.minutePickerStart + 6);
		var minuteCell = function (minute) {
			return A2(
				rtfeldman$elm_css$Html$Styled$td,
				_List_fromArray(
					[
						NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteClickHandler, pickerType, stateValue, minute)),
						NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteClickHandler, pickerType, stateValue, minute)),
						function () {
						var _n3 = stateValue.time.minute;
						if (_n3.$ === 'Just') {
							var stateMinute = _n3.a;
							return _Utils_eq(stateMinute, minute) ? rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle,
										rtfeldman$elm_css$Css$hover(
										_List_fromArray(
											[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle]))
									])) : rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
						} else {
							return rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
						}
					}()
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(
						A2(elm$core$Basics$composeR, elm$core$String$fromInt, NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$padding)(minute))
					]));
		};
		var hours = A2(elm$core$List$range, stateValue.hourPickerStart, stateValue.hourPickerStart + 6);
		var hourCell = function (hour) {
			return A2(
				rtfeldman$elm_css$Html$Styled$td,
				_List_fromArray(
					[
						NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourClickHandler, pickerType, stateValue, hour)),
						NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourClickHandler, pickerType, stateValue, hour)),
						function () {
						var _n2 = stateValue.time.hour;
						if (_n2.$ === 'Just') {
							var stateHour = _n2.a;
							return _Utils_eq(stateHour, hour) ? rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle,
										rtfeldman$elm_css$Css$hover(
										_List_fromArray(
											[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle]))
									])) : rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
						} else {
							return rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
						}
					}()
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(
						A2(elm$core$Basics$composeR, elm$core$String$fromInt, NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$padding)(hour))
					]));
		};
		var downArrowTd = A2(
			rtfeldman$elm_css$Html$Styled$styled,
			rtfeldman$elm_css$Html$Styled$td,
			_List_fromArray(
				[
					A3(
					rtfeldman$elm_css$Css$borderTop3,
					rtfeldman$elm_css$Css$px(1),
					rtfeldman$elm_css$Css$solid,
					NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray)
				]));
		var downArrows = function (config) {
			return _List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$tr,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$lightGray)
								]))
						]),
					_List_fromArray(
						[
							A2(
							downArrowTd,
							_List_fromArray(
								[
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourDownHandler, config, stateValue, currentDate)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$hourDownHandler, config, stateValue, currentDate))
								]),
							_List_fromArray(
								[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$downArrow])),
							A2(
							downArrowTd,
							_List_fromArray(
								[
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteDownHandler, config, stateValue, currentDate)),
									NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
									A3(NoRedInk$datetimepicker_legacy$DateTimePicker$minuteDownHandler, config, stateValue, currentDate))
								]),
							_List_fromArray(
								[NoRedInk$datetimepicker_legacy$DateTimePicker$Svg$downArrow])),
							A2(downArrowTd, _List_Nil, _List_Nil)
						]))
				]);
		};
		var ampmList = _List_fromArray(
			['AM', 'PM']);
		var amPmCell = function (ampm) {
			var handlers = elm$core$String$isEmpty(ampm) ? _List_Nil : _List_fromArray(
				[
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmClickHandler, pickerType, stateValue, ampm)),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onTouchStartPreventDefault(
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$amPmClickHandler, pickerType, stateValue, ampm))
				]);
			var defaultStyles = elm$core$String$isEmpty(ampm) ? rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$emptyCellStyle])) : rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil);
			var styles = function () {
				var _n1 = stateValue.time.amPm;
				if (_n1.$ === 'Just') {
					var stateAmPm = _n1.a;
					return _Utils_eq(stateAmPm, ampm) ? rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle,
								rtfeldman$elm_css$Css$hover(
								_List_fromArray(
									[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightStyle]))
							])) : defaultStyles;
				} else {
					return defaultStyles;
				}
			}();
			return A2(
				rtfeldman$elm_css$Html$Styled$td,
				A2(elm$core$List$cons, styles, handlers),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(ampm)
					]));
		};
		var toRow = F3(
			function (hour, min, ampm) {
				return A2(
					rtfeldman$elm_css$Html$Styled$tr,
					_List_Nil,
					_List_fromArray(
						[
							hourCell(hour),
							minuteCell(min),
							amPmCell(ampm)
						]));
			});
		var timeSelector = A4(
			elm$core$List$map3,
			toRow,
			hours,
			minutes,
			_Utils_ap(
				ampmList,
				A2(elm$core$List$repeat, 4, '')));
		var html = function (config) {
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$timePickerDialog]))
					]),
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$headerStyle]))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(
								A2(
									elm$core$Maybe$withDefault,
									'-- : --',
									A2(elm$core$Maybe$map, NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$timeFormatter, currentDate)))
							])),
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$backgroundColor(
										rtfeldman$elm_css$Css$hex('#fff')),
										rtfeldman$elm_css$Css$Global$descendants(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$Global$table(
												_List_fromArray(
													[
														NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$tableStyle,
														rtfeldman$elm_css$Css$width(
														rtfeldman$elm_css$Css$px(120)),
														rtfeldman$elm_css$Css$Global$descendants(
														_List_fromArray(
															[
																rtfeldman$elm_css$Css$Global$tr(
																_List_fromArray(
																	[
																		rtfeldman$elm_css$Css$verticalAlign(rtfeldman$elm_css$Css$top)
																	])),
																rtfeldman$elm_css$Css$Global$td(
																_List_fromArray(
																	[
																		rtfeldman$elm_css$Css$width(
																		rtfeldman$elm_css$Css$pct(33)),
																		NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$cellStyle,
																		rtfeldman$elm_css$Css$hover(
																		_List_fromArray(
																			[
																				rtfeldman$elm_css$Css$backgroundColor(NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightedDay),
																				NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$highlightBorderStyle
																			]))
																	]))
															]))
													]))
											]))
									]))
							]),
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$table,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										rtfeldman$elm_css$Html$Styled$tbody,
										_List_Nil,
										_Utils_ap(
											upArrows(config),
											_Utils_ap(
												timeSelector,
												downArrows(config))))
									]))
							]))
					]));
		};
		switch (pickerType.$) {
			case 'DateType':
				return rtfeldman$elm_css$Html$Styled$text('');
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				var config = pickerType.a;
				return html(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$timePickerDialog = F3(
	function (pickerType, state, currentDate) {
		var html = function (config) {
			var _n1 = config.timePickerType;
			if (_n1.$ === 'Digital') {
				return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$digitalTimePickerDialog, pickerType, state, currentDate);
			} else {
				return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$analogTimePickerDialog, pickerType, state, currentDate);
			}
		};
		switch (pickerType.$) {
			case 'DateType':
				return rtfeldman$elm_css$Html$Styled$text('');
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				var config = pickerType.a;
				return html(config);
		}
	});
var rtfeldman$elm_css$Css$border3 = rtfeldman$elm_css$Css$prop3('border');
var rtfeldman$elm_css$Css$boxShadow4 = rtfeldman$elm_css$Css$prop4('box-shadow');
var rtfeldman$elm_css$Css$displayFlex = A2(rtfeldman$elm_css$Css$property, 'display', 'flex');
var rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return elm$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			elm$core$String$join,
			', ',
			A2(
				elm$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var rtfeldman$elm_css$Css$fontFamilies = A2(
	elm$core$Basics$composeL,
	rtfeldman$elm_css$Css$prop1('font-family'),
	rtfeldman$elm_css$Css$stringsToValue);
var rtfeldman$elm_css$Css$rgba = F4(
	function (r, g, b, alpha) {
		return {
			alpha: alpha,
			blue: b,
			color: rtfeldman$elm_css$Css$Structure$Compatible,
			green: g,
			red: r,
			value: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				_Utils_ap(
					A2(
						elm$core$List$map,
						elm$core$String$fromInt,
						_List_fromArray(
							[r, g, b])),
					_List_fromArray(
						[
							elm$core$String$fromFloat(alpha)
						])))
		};
	});
var rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$dialog = F3(
	function (pickerType, state, currentDate) {
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var attributes = function (config) {
			return _List_fromArray(
				[
					NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onMouseDownPreventDefault(
					A2(
						config.onChange,
						NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
							_Utils_update(
								stateValue,
								{event: 'dialog.onMouseDownPreventDefault'})),
						currentDate)),
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$fontFamilies(
							_List_fromArray(
								['Arial', 'Helvetica', 'sans-serif'])),
							rtfeldman$elm_css$Css$fontSize(
							rtfeldman$elm_css$Css$px(14)),
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$borderBoxStyle,
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
							A3(
							rtfeldman$elm_css$Css$border3,
							rtfeldman$elm_css$Css$px(1),
							rtfeldman$elm_css$Css$solid,
							NoRedInk$datetimepicker_legacy$DateTimePicker$Styles$darkGray),
							A4(
							rtfeldman$elm_css$Css$boxShadow4,
							rtfeldman$elm_css$Css$px(0),
							rtfeldman$elm_css$Css$px(5),
							rtfeldman$elm_css$Css$px(10),
							A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0.2)),
							A2(rtfeldman$elm_css$Css$property, 'z-index', '1'),
							rtfeldman$elm_css$Css$displayFlex
						]))
				]);
		};
		var withTimeAttributes = F2(
			function (config, timePickerType) {
				if (timePickerType.$ === 'Analog') {
					return A2(
						elm$core$List$cons,
						rtfeldman$elm_css$Html$Styled$Events$onClick(
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$onChangeHandler, pickerType, stateValue, currentDate)),
						attributes(config));
				} else {
					return attributes(config);
				}
			});
		switch (pickerType.$) {
			case 'DateType':
				var datePickerConfig = pickerType.a;
				return A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$dialogNode,
					attributes(datePickerConfig),
					_List_fromArray(
						[
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$datePickerDialog, pickerType, state, currentDate)
						]));
			case 'TimeType':
				var timePickerConfig = pickerType.a;
				return A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$dialogNode,
					A2(withTimeAttributes, timePickerConfig, timePickerConfig.timePickerType),
					_List_fromArray(
						[
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$timePickerDialog, pickerType, state, currentDate)
						]));
			default:
				var timePickerConfig = pickerType.a;
				return A2(
					NoRedInk$datetimepicker_legacy$DateTimePicker$dialogNode,
					A2(withTimeAttributes, timePickerConfig, timePickerConfig.timePickerType),
					_List_fromArray(
						[
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$datePickerDialog, pickerType, state, currentDate),
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$timePickerDialog, pickerType, state, currentDate)
						]));
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$TimeSelection = F3(
	function (hour, minute, amPm) {
		return {amPm: amPm, hour: hour, minute: minute};
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$initialStateValue = {
	activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator),
	currentAngle: elm$core$Maybe$Nothing,
	date: elm$core$Maybe$Nothing,
	event: '',
	forceClose: false,
	hourPickerStart: 1,
	inputFocused: false,
	minutePickerStart: 0,
	time: A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$TimeSelection, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing),
	titleDate: elm$core$Maybe$Nothing,
	today: elm$core$Maybe$Nothing
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$inputChangeHandler = F4(
	function (config, stateValue, currentDate, maybeDate) {
		if (maybeDate.$ === 'Just') {
			var date = maybeDate.a;
			var updateTime = function (time) {
				return _Utils_update(
					time,
					{
						amPm: elm$core$Maybe$Just(
							NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryAmPm(date.hour)),
						hour: elm$core$Maybe$Just(
							NoRedInk$datetimepicker_legacy$DateTimePicker$DateUtils$fromMillitaryHour(date.hour)),
						minute: elm$core$Maybe$Just(date.minute)
					});
			};
			var updatedValue = _Utils_update(
				stateValue,
				{
					date: elm$core$Maybe$Just(date),
					event: 'inputChangeHandler',
					inputFocused: false,
					time: updateTime(stateValue.time)
				});
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedValue),
				maybeDate);
		} else {
			var _n1 = function () {
				if (currentDate.$ === 'Just') {
					return _Utils_Tuple3(
						{amPm: elm$core$Maybe$Nothing, hour: elm$core$Maybe$Nothing, minute: elm$core$Maybe$Nothing},
						elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator),
						elm$core$Maybe$Nothing);
				} else {
					return _Utils_Tuple3(stateValue.time, stateValue.activeTimeIndicator, stateValue.date);
				}
			}();
			var updatedTime = _n1.a;
			var updatedActiveTimeIndicator = _n1.b;
			var updatedDate = _n1.c;
			var updatedValue = _Utils_update(
				stateValue,
				{activeTimeIndicator: updatedActiveTimeIndicator, date: updatedDate, event: 'inputChangeHandler', hourPickerStart: NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$initialStateValue.hourPickerStart, inputFocused: false, minutePickerStart: NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$initialStateValue.minutePickerStart, time: updatedTime});
			return A2(
				config.onChange,
				NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(updatedValue),
				maybeDate);
		}
	});
var rtfeldman$elm_css$Html$Styled$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onBlurWithChange = F2(
	function (parser, tagger) {
		return A2(
			rtfeldman$elm_css$Html$Styled$Events$on,
			'blur',
			A2(
				elm$json$Json$Decode$map,
				A2(elm$core$Basics$composeR, parser, tagger),
				rtfeldman$elm_css$Html$Styled$Events$targetValue));
	});
var rtfeldman$elm_css$Html$Styled$input = rtfeldman$elm_css$Html$Styled$node('input');
var rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			elm$json$Json$Encode$string(string));
	});
var rtfeldman$elm_css$Html$Styled$Attributes$value = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('value');
var rtfeldman$elm_css$Html$Styled$Events$onFocus = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'focus',
		elm$json$Json$Decode$succeed(msg));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$view = F4(
	function (pickerType, attributes, state, currentDate) {
		var timeFormatter = function (dateTimePickerConfig) {
			return dateTimePickerConfig.timeFormatter;
		};
		var stateValue = NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$getStateValue(state);
		var shouldForceClose = function (config) {
			return config.autoClose && stateValue.forceClose;
		};
		var inputAttributes = function (config) {
			return _Utils_ap(
				attributes,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Events$onFocus(
						A4(NoRedInk$datetimepicker_legacy$DateTimePicker$datePickerFocused, pickerType, config, stateValue, currentDate)),
						A2(
						NoRedInk$datetimepicker_legacy$DateTimePicker$Events$onBlurWithChange,
						config.fromInput,
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$inputChangeHandler, config, stateValue, currentDate)),
						rtfeldman$elm_css$Html$Styled$Attributes$value(
						A2(
							elm$core$Maybe$withDefault,
							'',
							A2(elm$core$Maybe$map, config.toInput, currentDate)))
					]));
		};
		var html = function (config) {
			return A3(
				rtfeldman$elm_css$Html$Styled$node,
				'date-time-picker',
				A2(
					elm$core$List$cons,
					rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
							])),
					config.attributes),
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$input,
						inputAttributes(config),
						_List_Nil),
						(config.usePicker && (stateValue.inputFocused && (!shouldForceClose(config)))) ? A3(NoRedInk$datetimepicker_legacy$DateTimePicker$dialog, pickerType, state, currentDate) : rtfeldman$elm_css$Html$Styled$text('')
					]));
		};
		switch (pickerType.$) {
			case 'DateType':
				var config = pickerType.a;
				return html(config);
			case 'DateTimeType':
				var config = pickerType.a;
				return html(config);
			default:
				var config = pickerType.a;
				return html(config);
		}
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$TimeType = function (a) {
	return {$: 'TimeType', a: a};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$timePickerWithConfig = function (config) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$view(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Config$TimeType(config));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$Analog = {$: 'Analog'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$validate = function (datetime) {
	return ((datetime.hour > 23) || (datetime.hour < 0)) ? elm$core$Maybe$Nothing : (((datetime.minute > 59) || (datetime.minute < 0)) ? elm$core$Maybe$Nothing : ((datetime.year < 0) ? elm$core$Maybe$Nothing : ((datetime.day < 1) ? elm$core$Maybe$Nothing : (_Utils_eq(datetime.month, elm$time$Time$Feb) ? ((NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$isLeapYear(datetime.year) && (datetime.day > 29)) ? elm$core$Maybe$Nothing : ((datetime.day > 28) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(datetime))) : (((_Utils_eq(datetime.month, elm$time$Time$Sep) || (_Utils_eq(datetime.month, elm$time$Time$Apr) || (_Utils_eq(datetime.month, elm$time$Time$Jun) || _Utils_eq(datetime.month, elm$time$Time$Nov)))) && (datetime.day > 30)) ? elm$core$Maybe$Nothing : ((datetime.day > 31) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(datetime)))))));
};
var elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parse(s0);
				if (_n1.$ === 'Bad') {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3(elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parse(s0);
				if (_n1.$ === 'Good') {
					var p = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces = A2(
	elm$parser$Parser$map,
	function (_n0) {
		return _Utils_Tuple0;
	},
	elm$parser$Parser$getChompedString(
		elm$parser$Parser$chompWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr(' '));
			})));
var elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return elm$core$Maybe$Just(v);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parseA(s0);
				if (_n1.$ === 'Bad') {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					var _n2 = callback(a);
					var parseB = _n2.a;
					var _n3 = parseB(s1);
					if (_n3.$ === 'Bad') {
						var p2 = _n3.a;
						var x = _n3.b;
						return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _n3.a;
						var b = _n3.b;
						var s2 = _n3.c;
						return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
var elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var elm$parser$Parser$Advanced$end = function (x) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				elm$core$String$length(s.src),
				s.offset) ? A3(elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var elm$parser$Parser$end = elm$parser$Parser$Advanced$end(elm$parser$Parser$ExpectingEnd);
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0.a;
		var parseB = _n1.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n2 = parseA(s0);
				if (_n2.$ === 'Bad') {
					var p = _n2.a;
					var x = _n2.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _n2.a;
					var a = _n2.b;
					var s1 = _n2.c;
					var _n3 = parseB(s1);
					if (_n3.$ === 'Bad') {
						var p2 = _n3.a;
						var x = _n3.b;
						return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _n3.a;
						var b = _n3.b;
						var s2 = _n3.c;
						return A3(
							elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var elm$parser$Parser$Advanced$problem = function (x) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var elm$parser$Parser$problem = function (msg) {
	return elm$parser$Parser$Advanced$problem(
		elm$parser$Parser$Problem(msg));
};
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0.a;
		var _n1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_n1.$ === 'Good') {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (_n0.$ === 'Ok') {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var elm$parser$Parser$Advanced$succeed = function (a) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3(elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$runWithSurroundingSpaceAndValidation = F2(
	function (innerParser, input) {
		var finalParser = A2(
			elm$parser$Parser$andThen,
			function (datetime) {
				var _n0 = NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$validate(datetime);
				if (_n0.$ === 'Just') {
					var validatedDateTime = _n0.a;
					return elm$parser$Parser$succeed(validatedDateTime);
				} else {
					return elm$parser$Parser$problem('Invalid date');
				}
			},
			A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces),
				A2(
					elm$parser$Parser$ignorer,
					A2(elm$parser$Parser$ignorer, innerParser, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces),
					elm$parser$Parser$end)));
		return elm$core$Result$toMaybe(
			A2(elm$parser$Parser$run, finalParser, input));
	});
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (_n1.$ === 'Good') {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _n1.a;
			var newRow = _n1.b;
			var newCol = _n1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
var elm$parser$Parser$symbol = function (str) {
	return elm$parser$Parser$Advanced$symbol(
		A2(
			elm$parser$Parser$Advanced$Token,
			str,
			elm$parser$Parser$ExpectingSymbol(str)));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$amPm = elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			elm$parser$Parser$map,
			function (_n0) {
				return 'AM';
			},
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						elm$parser$Parser$symbol('AM'),
						elm$parser$Parser$symbol('am'),
						elm$parser$Parser$symbol('aM'),
						elm$parser$Parser$symbol('Am')
					]))),
			A2(
			elm$parser$Parser$map,
			function (_n1) {
				return 'PM';
			},
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						elm$parser$Parser$symbol('PM'),
						elm$parser$Parser$symbol('pm'),
						elm$parser$Parser$symbol('pM'),
						elm$parser$Parser$symbol('Pm')
					])))
		]));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$clamped = F3(
	function (min, max, previousParser) {
		return A2(
			elm$parser$Parser$andThen,
			function (_int) {
				return ((_Utils_cmp(_int, max) > 0) || (_Utils_cmp(_int, min) < 0)) ? elm$parser$Parser$problem('Int out of range') : elm$parser$Parser$succeed(_int);
			},
			previousParser);
	});
var elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var elm$parser$Parser$chompIf = function (isGood) {
	return A2(elm$parser$Parser$Advanced$chompIf, isGood, elm$parser$Parser$UnexpectedChar);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$looseInt = A2(
	elm$parser$Parser$andThen,
	function (digitsString) {
		var _n0 = elm$core$String$toInt(digitsString);
		if (_n0.$ === 'Just') {
			var _int = _n0.a;
			return elm$parser$Parser$succeed(_int);
		} else {
			return elm$parser$Parser$problem(digitsString + ' is not an integer');
		}
	},
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(_Utils_Tuple0),
				elm$parser$Parser$chompIf(elm$core$Char$isDigit)),
			elm$parser$Parser$chompWhile(elm$core$Char$isDigit))));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipAtLeastOneSpace = A2(
	elm$parser$Parser$map,
	function (_n0) {
		return _Utils_Tuple0;
	},
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(_Utils_Tuple0),
				elm$parser$Parser$chompIf(
					function (c) {
						return _Utils_eq(
							c,
							_Utils_chr(' '));
					})),
			elm$parser$Parser$chompWhile(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(' '));
				}))));
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$timeParser = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			elm$parser$Parser$succeed(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromTime),
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$clamped, 1, 12, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$looseInt),
						NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces),
					elm$parser$Parser$symbol(':')),
				NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces)),
		A2(
			elm$parser$Parser$ignorer,
			A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$clamped, 0, 59, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$looseInt),
			NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipAtLeastOneSpace)),
	NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$amPm);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$parseTime = function (input) {
	return A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$runWithSurroundingSpaceAndValidation, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$timeParser, input);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultTimePickerConfig = function (onChange) {
	return {attributes: _List_Nil, autoClose: false, fromInput: NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$parseTime, onChange: onChange, timePickerType: NoRedInk$datetimepicker_legacy$DateTimePicker$Config$Analog, toInput: NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$timeFormatter, usePicker: true};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$timePicker = function (onChange) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$timePickerWithConfig(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultTimePickerConfig(onChange));
};
var elm$html$Html$footer = _VirtualDom_node('footer');
var elm$html$Html$header = _VirtualDom_node('header');
var elm$html$Html$p = _VirtualDom_node('p');
var mlu$fragebogengenerator$Edit$viewValidation = function (model) {
	var _n0 = function () {
		var _n1 = model.validationResult;
		switch (_n1.$) {
			case 'NotDone':
				return _Utils_Tuple2('', '');
			case 'Error':
				var msg = _n1.a;
				return _Utils_Tuple2('red', msg);
			default:
				return _Utils_Tuple2('green', 'OK');
		}
	}();
	var color = _n0.a;
	var message = _n0.b;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'color', color)
			]),
		_List_fromArray(
			[
				elm$html$Html$text(message)
			]));
};
var mlu$fragebogengenerator$Model$DateTimePickerChanged = F2(
	function (a, b) {
		return {$: 'DateTimePickerChanged', a: a, b: b};
	});
var mlu$fragebogengenerator$Model$Submit = {$: 'Submit'};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_n0, styles) {
		var newStyles = _n0.b;
		var classname = _n0.c;
		return elm$core$List$isEmpty(newStyles) ? styles : A3(elm$core$Dict$insert, classname, newStyles, styles);
	});
var rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_n0) {
	var val = _n0.a;
	return val;
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_n6, _n7) {
		var key = _n6.a;
		var html = _n6.b;
		var pairs = _n7.a;
		var styles = _n7.b;
		switch (html.$) {
			case 'Unstyled':
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n9 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n9.a;
				var finalStyles = _n9.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n10 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n10.a;
				var finalStyles = _n10.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n11 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n11.a;
				var finalStyles = _n11.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n12 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n12.a;
				var finalStyles = _n12.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _n0) {
		var nodes = _n0.a;
		var styles = _n0.b;
		switch (html.$) {
			case 'Unstyled':
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n2 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n2.a;
				var finalStyles = _n2.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n3 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n3.a;
				var finalStyles = _n3.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n4 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n4.a;
				var finalStyles = _n4.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n5 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n5.a;
				var finalStyles = _n5.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _n1 = properties.a;
				var styles = _n1.b;
				var classname = _n1.c;
				var rest = properties.b;
				if (elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _n0 = A2(rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, elm$core$Maybe$Nothing, properties);
	if (_n0.$ === 'Nothing') {
		return elm$core$Dict$empty;
	} else {
		var _n1 = _n0.a;
		var classname = _n1.a;
		var styles = _n1.b;
		return A2(elm$core$Dict$singleton, classname, styles);
	}
};
var rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 'ClassSelector', a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_n0) {
	var classname = _n0.a;
	var styles = _n0.b;
	return A2(
		rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		elm$core$List$singleton(
			rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					elm$core$List$map,
					rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					elm$core$Dict$toList(dict)))));
};
var rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		elm$core$List$singleton(
			elm$virtual_dom$VirtualDom$text(
				rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _n1 = pairs.a;
				var str = _n1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _n1 = pairs.a;
				var firstKey = _n1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2(rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2(rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 'Unstyled':
			var plainNode = vdom.a;
			return plainNode;
		case 'Node':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 'NodeNS':
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 'KeyedNode':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var rtfeldman$elm_css$Html$Styled$toUnstyled = rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var rtfeldman$elm_css$Html$Styled$Attributes$class = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('className');
var mlu$fragebogengenerator$Edit$viewEditTimeModal = function (model) {
	var questionnaire = model.questionnaire;
	return model.showEditTimeModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Bearbeitungszeit')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$EditTimeModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'margin-bottom', '270px')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Zeit: '),
										rtfeldman$elm_css$Html$Styled$toUnstyled(
										A4(
											NoRedInk$datetimepicker_legacy$DateTimePicker$timePicker,
											mlu$fragebogengenerator$Model$DateTimePickerChanged,
											_List_fromArray(
												[
													rtfeldman$elm_css$Html$Styled$Attributes$class('my-timepicker')
												]),
											model.state,
											model.value)),
										A2(
										elm$html$Html$br,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'margin-bottom', '20px')
											]),
										_List_Nil),
										mlu$fragebogengenerator$Edit$viewValidation(model)
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$Submit)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					])),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-close is-large'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$EditTimeModal))
					]),
				_List_Nil)
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$Attributes$name = elm$html$Html$Attributes$stringProperty('name');
var mlu$fragebogengenerator$Edit$radio = F2(
	function (value, msg) {
		return A2(
			elm$html$Html$label,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'padding', '20px')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('radio'),
							elm$html$Html$Attributes$name('font-size'),
							elm$html$Html$Events$onClick(msg)
						]),
					_List_Nil),
					elm$html$Html$text(value)
				]));
	});
var mlu$fragebogengenerator$Model$AnswerModal = {$: 'AnswerModal'};
var mlu$fragebogengenerator$Model$ChangeAnswerText = function (a) {
	return {$: 'ChangeAnswerText', a: a};
};
var mlu$fragebogengenerator$Model$ChangeAnswerType = function (a) {
	return {$: 'ChangeAnswerType', a: a};
};
var mlu$fragebogengenerator$Model$SetAnswer = {$: 'SetAnswer'};
var mlu$fragebogengenerator$Edit$viewNewAnswerModal = function (model) {
	var questionnaire = model.questionnaire;
	return model.showNewAnswerModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Neue Antwort')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$AnswerModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('Antworttext: '),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('input is-medium'),
												elm$html$Html$Attributes$type_('text'),
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeAnswerText)
											]),
										_List_Nil)
									])),
								A2(elm$html$Html$br, _List_Nil, _List_Nil),
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('Typ: ' + questionnaire.newAnswer.typ),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Fester Wert',
										mlu$fragebogengenerator$Model$ChangeAnswerType('regular')),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Freie Eingabe',
										mlu$fragebogengenerator$Model$ChangeAnswerType('free'))
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$SetAnswer)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var mlu$fragebogengenerator$Edit$getConditionTable = F2(
	function (index, condition) {
		return A2(
			elm$html$Html$tr,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(
					elm$core$String$fromInt(index))
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$core$String$fromInt(index))
						])),
					A2(elm$html$Html$td, _List_Nil, _List_Nil),
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('fas fa-trash-alt')
								]),
							_List_Nil)
						]))
				]));
	});
var mlu$fragebogengenerator$Edit$tableHead_conditions = A2(
	elm$html$Html$tr,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Von')
				])),
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Zu')
				])),
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Aktion')
				]))
		]));
var mlu$fragebogengenerator$Edit$conditionsTable = function (questionnaire) {
	var _n0 = questionnaire.newElement;
	if (_n0.$ === 'Question') {
		var record = _n0.a;
		return A2(
			elm$core$List$append,
			_List_fromArray(
				[mlu$fragebogengenerator$Edit$tableHead_conditions]),
			A2(elm$core$List$indexedMap, mlu$fragebogengenerator$Edit$getConditionTable, questionnaire.conditions));
	} else {
		var record = _n0.a;
		return _List_Nil;
	}
};
var mlu$fragebogengenerator$Model$ConditionModal2 = {$: 'ConditionModal2'};
var mlu$fragebogengenerator$Edit$viewNewConditionModal1 = function (model) {
	return model.showNewConditionModal1 ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Bedingungen')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ConditionModal1))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										elm$html$Html$table,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('table is-striped'),
												A2(elm$html$Html$Attributes$style, 'width', '100%')
											]),
										mlu$fragebogengenerator$Edit$conditionsTable(model.questionnaire))
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ConditionModal2))
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Neu')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var elm$html$Html$select = _VirtualDom_node('select');
var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty('placeholder');
var elm$html$Html$option = _VirtualDom_node('option');
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var mlu$fragebogengenerator$QElement$getElementId = function (elem) {
	if (elem.$ === 'Question') {
		var a = elem.a;
		return a.id;
	} else {
		var a = elem.a;
		return a.id;
	}
};
var mlu$fragebogengenerator$QElement$getElementText = function (element) {
	if (element.$ === 'Question') {
		var record = element.a;
		return record.text;
	} else {
		var record = element.a;
		return record.text;
	}
};
var mlu$fragebogengenerator$Edit$getQuestionOptions = F2(
	function (list, newCondition) {
		return _Utils_ap(
			_List_fromArray(
				[
					A2(
					elm$html$Html$option,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('Keine')
						]))
				]),
			A2(
				elm$core$List$map,
				function (e) {
					return A2(
						elm$html$Html$option,
						_List_fromArray(
							[
								elm$html$Html$Attributes$selected(
								_Utils_eq(
									mlu$fragebogengenerator$QElement$getElementId(e),
									newCondition.parent_id))
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								elm$core$String$fromInt(
									mlu$fragebogengenerator$QElement$getElementId(e)) + ('.' + (' ' + mlu$fragebogengenerator$QElement$getElementText(e))))
							]));
				},
				list));
	});
var mlu$fragebogengenerator$Model$AddAnswerToNewCondition = function (a) {
	return {$: 'AddAnswerToNewCondition', a: a};
};
var mlu$fragebogengenerator$Model$AddConditionAnswer = {$: 'AddConditionAnswer'};
var mlu$fragebogengenerator$Model$ChangeInputChildId = function (a) {
	return {$: 'ChangeInputChildId', a: a};
};
var mlu$fragebogengenerator$Model$ChangeInputParentId = function (a) {
	return {$: 'ChangeInputParentId', a: a};
};
var mlu$fragebogengenerator$Model$SetConditions = {$: 'SetConditions'};
var mlu$fragebogengenerator$Edit$viewNewConditionModal2 = function (model) {
	return model.showNewConditionModal2 ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Bedingungen')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ConditionModal2))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('von Frage: '),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('select')
											]),
										_List_fromArray(
											[
												A2(
												elm$html$Html$select,
												_List_fromArray(
													[
														elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeInputParentId)
													]),
												A2(mlu$fragebogengenerator$Edit$getQuestionOptions, model.questionnaire.elements, model.questionnaire.newCondition))
											])),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										elm$html$Html$text(' zu Frage: '),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('select')
											]),
										_List_fromArray(
											[
												A2(
												elm$html$Html$select,
												_List_fromArray(
													[
														elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeInputChildId)
													]),
												A2(mlu$fragebogengenerator$Edit$getQuestionOptions, model.questionnaire.elements, model.questionnaire.newCondition))
											])),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										elm$html$Html$text('Bei Beantwortung der Antworten mit den IDs: '),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$placeholder('Hier ID eingeben'),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$AddAnswerToNewCondition)
											]),
										_List_Nil),
										A2(
										elm$html$Html$button,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('button'),
												A2(elm$html$Html$Attributes$style, 'margin-left', '1em'),
												A2(elm$html$Html$Attributes$style, 'margin-top', '0.25em'),
												elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$AddConditionAnswer)
											]),
										_List_fromArray(
											[
												elm$html$Html$text('Hinzufügen')
											]))
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$SetConditions)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var mlu$fragebogengenerator$Model$ChangeQuestionOrNoteText = function (a) {
	return {$: 'ChangeQuestionOrNoteText', a: a};
};
var mlu$fragebogengenerator$Model$SetNote = {$: 'SetNote'};
var mlu$fragebogengenerator$Edit$viewNewNoteModal = function (model) {
	var questionnaire = model.questionnaire;
	return model.showNewNoteModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Neue Anmerkung')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$NewNoteModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('Text: '),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('input is-medium'),
												elm$html$Html$Attributes$type_('text'),
												A2(elm$html$Html$Attributes$style, 'width', '180px'),
												A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
												A2(elm$html$Html$Attributes$style, 'margin-right', '10px'),
												elm$html$Html$Attributes$value(
												mlu$fragebogengenerator$QElement$getElementText(questionnaire.newElement)),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeQuestionOrNoteText)
											]),
										_List_Nil)
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$SetNote)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					])),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-close is-large'),
						elm$html$Html$Events$onClick(
						mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$NewNoteModal))
					]),
				_List_Nil)
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var mlu$fragebogengenerator$Model$DeleteAnswer = function (a) {
	return {$: 'DeleteAnswer', a: a};
};
var mlu$fragebogengenerator$Model$EditAnswer = function (a) {
	return {$: 'EditAnswer', a: a};
};
var mlu$fragebogengenerator$Model$PutDownAns = function (a) {
	return {$: 'PutDownAns', a: a};
};
var mlu$fragebogengenerator$Model$PutUpAns = function (a) {
	return {$: 'PutUpAns', a: a};
};
var mlu$fragebogengenerator$Edit$getAnswerTable = F2(
	function (index, answer) {
		return A2(
			elm$html$Html$tr,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(
					elm$core$String$fromInt(index))
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$core$String$fromInt(index))
						])),
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(answer.text)
						])),
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(answer.typ)
						])),
					A2(
					elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('fas fa-arrow-up'),
									elm$html$Html$Events$onClick(
									mlu$fragebogengenerator$Model$PutUpAns(answer))
								]),
							_List_Nil),
							A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('fas fa-arrow-down'),
									elm$html$Html$Events$onClick(
									mlu$fragebogengenerator$Model$PutDownAns(answer)),
									A2(elm$html$Html$Attributes$style, 'margin-left', '1em'),
									A2(elm$html$Html$Attributes$style, 'margin-right', '1em')
								]),
							_List_Nil),
							A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('fas fa-cog'),
									A2(elm$html$Html$Attributes$style, 'margin-right', '1em'),
									elm$html$Html$Events$onClick(
									mlu$fragebogengenerator$Model$EditAnswer(answer))
								]),
							_List_Nil),
							A2(
							elm$html$Html$i,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('fas fa-trash-alt'),
									elm$html$Html$Events$onClick(
									mlu$fragebogengenerator$Model$DeleteAnswer(answer))
								]),
							_List_Nil)
						]))
				]));
	});
var mlu$fragebogengenerator$Edit$tableHead_answers = A2(
	elm$html$Html$tr,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('ID')
				])),
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Text')
				])),
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Typ')
				])),
			A2(
			elm$html$Html$th,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Aktion')
				]))
		]));
var mlu$fragebogengenerator$Edit$answersTable = function (questionnaire) {
	var _n0 = questionnaire.newElement;
	if (_n0.$ === 'Question') {
		var record = _n0.a;
		return A2(
			elm$core$List$append,
			_List_fromArray(
				[mlu$fragebogengenerator$Edit$tableHead_answers]),
			A2(
				elm$core$List$indexedMap,
				mlu$fragebogengenerator$Edit$getAnswerTable,
				mlu$fragebogengenerator$QElement$getAntworten(questionnaire.newElement)));
	} else {
		var record = _n0.a;
		return _List_Nil;
	}
};
var mlu$fragebogengenerator$Model$SetPolarAnswers = function (a) {
	return {$: 'SetPolarAnswers', a: a};
};
var mlu$fragebogengenerator$Edit$showInputBipolarUnipolar = function (questionnaire) {
	var _n0 = questionnaire.newElement;
	if (_n0.$ === 'Question') {
		var record = _n0.a;
		return (record.typ === 'Skaliert unipolar') ? A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Bitte Anzahl Antworten (insgesamt) eingeben'),
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('input is-medium'),
							elm$html$Html$Attributes$type_('text'),
							A2(elm$html$Html$Attributes$style, 'width', '100px'),
							A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
							A2(elm$html$Html$Attributes$style, 'margin-top', '2px'),
							elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$SetPolarAnswers)
						]),
					_List_Nil)
				])) : ((record.typ === 'Skaliert bipolar') ? A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Bitte Anzahl Antworten (pro Skalenrichtung) eingeben'),
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('input is-medium'),
							elm$html$Html$Attributes$type_('text'),
							A2(elm$html$Html$Attributes$style, 'width', '100px'),
							A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
							A2(elm$html$Html$Attributes$style, 'margin-top', '2px'),
							elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$SetPolarAnswers)
						]),
					_List_Nil)
				])) : A2(elm$html$Html$div, _List_Nil, _List_Nil));
	} else {
		var record = _n0.a;
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var mlu$fragebogengenerator$Model$ChangeQuestionNote = function (a) {
	return {$: 'ChangeQuestionNote', a: a};
};
var mlu$fragebogengenerator$Model$ChangeQuestionType = function (a) {
	return {$: 'ChangeQuestionType', a: a};
};
var mlu$fragebogengenerator$Model$SetQuestion = {$: 'SetQuestion'};
var mlu$fragebogengenerator$QElement$getQuestionHinweis = function (element) {
	if (element.$ === 'Question') {
		var record = element.a;
		return record.hint;
	} else {
		var record = element.a;
		return 'None';
	}
};
var mlu$fragebogengenerator$QElement$getQuestionTyp = function (element) {
	if (element.$ === 'Question') {
		var record = element.a;
		return record.typ;
	} else {
		var record = element.a;
		return 'None';
	}
};
var mlu$fragebogengenerator$Edit$viewNewQuestionModal = function (model) {
	return model.showNewQuestionModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Neue Frage')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$QuestionModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										elm$html$Html$table,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('table is-striped'),
												A2(elm$html$Html$Attributes$style, 'width', '100%')
											]),
										mlu$fragebogengenerator$Edit$answersTable(model.questionnaire)),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										elm$html$Html$button,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('qnButton'),
												A2(elm$html$Html$Attributes$style, 'margin-bottom', '10px'),
												elm$html$Html$Events$onClick(
												mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$AnswerModal))
											]),
										_List_fromArray(
											[
												elm$html$Html$text('Neue Antwort')
											])),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										mlu$fragebogengenerator$Edit$showInputBipolarUnipolar(model.questionnaire),
										A2(
										elm$html$Html$br,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'margin-top', '20px')
											]),
										_List_Nil),
										elm$html$Html$text('Fragetext: '),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('input is-medium'),
												elm$html$Html$Attributes$type_('text'),
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												elm$html$Html$Attributes$value(
												mlu$fragebogengenerator$QElement$getElementText(model.questionnaire.newElement)),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeQuestionOrNoteText)
											]),
										_List_Nil),
										A2(
										elm$html$Html$br,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'margin-top', '20px')
											]),
										_List_Nil),
										elm$html$Html$text('Hinweis: '),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('input is-medium'),
												elm$html$Html$Attributes$type_('text'),
												A2(elm$html$Html$Attributes$style, 'width', '100%'),
												elm$html$Html$Attributes$value(
												mlu$fragebogengenerator$QElement$getQuestionHinweis(model.questionnaire.newElement)),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeQuestionNote)
											]),
										_List_Nil),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										elm$html$Html$text(
										'Typ: ' + mlu$fragebogengenerator$QElement$getQuestionTyp(model.questionnaire.newElement)),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Single Choice',
										mlu$fragebogengenerator$Model$ChangeQuestionType('Single Choice')),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Multiple Choice',
										mlu$fragebogengenerator$Model$ChangeQuestionType('Multiple Choice')),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Ja/Nein Frage',
										mlu$fragebogengenerator$Model$ChangeQuestionType('Ja/Nein Frage')),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Skaliert unipolar',
										mlu$fragebogengenerator$Model$ChangeQuestionType('Skaliert unipolar')),
										A2(
										mlu$fragebogengenerator$Edit$radio,
										'Skaliert bipolar',
										mlu$fragebogengenerator$Model$ChangeQuestionType('Skaliert bipolar')),
										A2(elm$html$Html$br, _List_Nil, _List_Nil)
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$SetQuestion)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var mlu$fragebogengenerator$Model$ChangeInputQuestionnaireTitle = function (a) {
	return {$: 'ChangeInputQuestionnaireTitle', a: a};
};
var mlu$fragebogengenerator$Model$SetQuestionnaireTitle = {$: 'SetQuestionnaireTitle'};
var mlu$fragebogengenerator$Edit$viewTitleModal = function (model) {
	var questionnaire = model.questionnaire;
	return model.showTitleModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Titel ändern')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$TitleModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('Text: '),
										A2(
										elm$html$Html$input,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('input is-medium'),
												elm$html$Html$Attributes$type_('text'),
												A2(elm$html$Html$Attributes$style, 'width', '180px'),
												A2(elm$html$Html$Attributes$style, 'margin-left', '10px'),
												A2(elm$html$Html$Attributes$style, 'margin-right', '10px'),
												elm$html$Html$Attributes$value(model.inputTitle),
												elm$html$Html$Events$onInput(mlu$fragebogengenerator$Model$ChangeInputQuestionnaireTitle)
											]),
										_List_Nil)
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('button is-success'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$SetQuestionnaireTitle)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$DateTimeType = function (a) {
	return {$: 'DateTimeType', a: a};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$dateTimePickerWithConfig = function (config) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$view(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Config$DateTimeType(config));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultNameOfDays = {friday: 'Fr', monday: 'Mo', saturday: 'Sa', sunday: 'Su', thursday: 'Th', tuesday: 'Tu', wednesday: 'We'};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$dateFormatter = function (dateTime) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero(
		NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$monthToInt(dateTime.month)) + ('/' + (NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$padWithZero(dateTime.day) + ('/' + elm$core$String$fromInt(dateTime.year))));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$dateTimeFormatter = function (dateTime) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$dateFormatter(dateTime) + (' ' + NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$timeFormatter(dateTime));
};
var elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var elm$core$String$toFloat = _String_toFloat;
var elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3(elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3(elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2(elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3(elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			elm$parser$Parser$Advanced$consumeExp,
			A2(elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2(elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _n0, s) {
		var endOffset = _n0.a;
		var n = _n0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2(elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2(elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2(elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A4(elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5(elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							elm$parser$Parser$Advanced$Bad,
							true,
							A2(elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _n1 = elm$core$String$toFloat(
							A3(elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_n1.$ === 'Nothing') {
							return A2(
								elm$parser$Parser$Advanced$Bad,
								true,
								A2(elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _n1.a;
							return A3(
								elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2(elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$number = function (c) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3(elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3(elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2(elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3(elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3(elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3(elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return elm$parser$Parser$Advanced$number(
			{
				binary: elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: elm$core$Result$Err(invalid),
				hex: elm$core$Result$Err(invalid),
				_int: elm$core$Result$Ok(elm$core$Basics$identity),
				invalid: invalid,
				octal: elm$core$Result$Err(invalid)
			});
	});
var elm$parser$Parser$int = A2(elm$parser$Parser$Advanced$int, elm$parser$Parser$ExpectingInt, elm$parser$Parser$ExpectingInt);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$dateParser = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			elm$parser$Parser$succeed(
				F3(
					function (month, day, year) {
						return A3(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromDate, year, month, day);
					})),
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						A2(
							elm$parser$Parser$map,
							NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$intToMonth,
							A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$clamped, 1, 12, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$looseInt)),
						NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces),
					elm$parser$Parser$symbol('/')),
				NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces)),
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$clamped, 1, 31, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$looseInt),
					NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces),
				elm$parser$Parser$symbol('/')),
			NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipOptionalSpaces)),
	elm$parser$Parser$int);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$dateTimeParser = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$keeper,
		elm$parser$Parser$succeed(
			F2(
				function (dateComponent, timeComponent) {
					return A5(NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$fromParts, dateComponent.year, dateComponent.month, dateComponent.day, timeComponent.hour, timeComponent.minute);
				})),
		A2(elm$parser$Parser$ignorer, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$dateParser, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$skipAtLeastOneSpace)),
	NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$timeParser);
var NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$parseDateTime = function (input) {
	return A2(NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$runWithSurroundingSpaceAndValidation, NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$dateTimeParser, input);
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultDateTimePickerConfig = function (onChange) {
	return {allowYearNavigation: true, attributes: _List_Nil, autoClose: false, earliestDate: elm$core$Maybe$Nothing, firstDayOfWeek: elm$time$Time$Sun, fromInput: NoRedInk$datetimepicker_legacy$DateTimePicker$Parser$parseDateTime, nameOfDays: NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultNameOfDays, onChange: onChange, timePickerType: NoRedInk$datetimepicker_legacy$DateTimePicker$Config$Analog, toInput: NoRedInk$datetimepicker_legacy$DateTimePicker$Formatter$dateTimeFormatter, usePicker: true};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$dateTimePicker = function (onChange) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$dateTimePickerWithConfig(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Config$defaultDateTimePickerConfig(onChange));
};
var mlu$fragebogengenerator$Edit$viewViewingTimeModal = function (model) {
	var questionnaire = model.questionnaire;
	return model.showViewingTimeModal ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('modal is-active')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-background')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('modal-card')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$header,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-head mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('modal-card-title is-size-3 has-text-centered is-italic')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Erscheinungszeit')
									])),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('is-large delete'),
										elm$html$Html$Events$onClick(
										mlu$fragebogengenerator$Model$ViewOrClose(mlu$fragebogengenerator$Model$ViewingTimeModal))
									]),
								_List_Nil)
							])),
						A2(
						elm$html$Html$section,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-body')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'margin-bottom', '280px')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Von '),
										rtfeldman$elm_css$Html$Styled$toUnstyled(
										A4(
											NoRedInk$datetimepicker_legacy$DateTimePicker$dateTimePicker,
											mlu$fragebogengenerator$Model$DateTimePickerChanged,
											_List_fromArray(
												[
													rtfeldman$elm_css$Html$Styled$Attributes$class('my-datetimepicker')
												]),
											model.state,
											model.value)),
										elm$html$Html$text(' Bis '),
										rtfeldman$elm_css$Html$Styled$toUnstyled(
										A4(
											NoRedInk$datetimepicker_legacy$DateTimePicker$dateTimePicker,
											mlu$fragebogengenerator$Model$DateTimePickerChanged,
											_List_fromArray(
												[
													rtfeldman$elm_css$Html$Styled$Attributes$class('my-datetimepicker')
												]),
											model.state,
											model.value)),
										A2(
										elm$html$Html$br,
										_List_fromArray(
											[
												A2(elm$html$Html$Attributes$style, 'margin-bottom', '20px')
											]),
										_List_Nil),
										mlu$fragebogengenerator$Edit$viewValidation(model)
									]))
							])),
						A2(
						elm$html$Html$footer,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('modal-card-foot mediumlightblue')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$Submit)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Übernehmen')
									]))
							]))
					]))
			])) : A2(elm$html$Html$div, _List_Nil, _List_Nil);
};
var mlu$fragebogengenerator$Edit$showEditQuestionnaire = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				mlu$fragebogengenerator$Edit$showHeroQuestionnaireTitle(model.questionnaire),
				mlu$fragebogengenerator$Edit$showQuestionList(model.questionnaire),
				mlu$fragebogengenerator$Edit$showTimes(model.questionnaire),
				mlu$fragebogengenerator$Edit$showCreateQuestionOrNoteButtons(model.questionnaire),
				mlu$fragebogengenerator$Edit$viewTitleModal(model),
				mlu$fragebogengenerator$Edit$viewEditTimeModal(model),
				mlu$fragebogengenerator$Edit$viewViewingTimeModal(model),
				mlu$fragebogengenerator$Edit$viewNewNoteModal(model),
				mlu$fragebogengenerator$Edit$viewNewQuestionModal(model),
				mlu$fragebogengenerator$Edit$viewNewAnswerModal(model),
				mlu$fragebogengenerator$Edit$viewConditions(model.questionnaire),
				mlu$fragebogengenerator$Edit$viewNewConditionModal1(model),
				mlu$fragebogengenerator$Edit$viewNewConditionModal2(model)
			]));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$nav = _VirtualDom_node('nav');
var mlu$fragebogengenerator$Model$EditQuestionnaire = {$: 'EditQuestionnaire'};
var mlu$fragebogengenerator$Model$EnterUpload = {$: 'EnterUpload'};
var mlu$fragebogengenerator$Main$showNavbar = A2(
	elm$html$Html$nav,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('navbar is-fixed-top is-link')
		]),
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('navbar-brand')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$p,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('navbar-item'),
							A2(elm$html$Html$Attributes$style, 'padding-top', '0.5em')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Fragebogengenerator')
						]))
				])),
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('navbar-menu')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('navbar-start')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('navbar-item'),
									elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$EditQuestionnaire)
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Fragebogen Erstellen')
								])),
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('navbar-item'),
									elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$EnterUpload)
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Fragebogen Hochladen')
								]))
						]))
				]))
		]));
var mlu$fragebogengenerator$Model$JsonRequested = {$: 'JsonRequested'};
var mlu$fragebogengenerator$Upload$showHeroWith = function (string) {
	return A2(
		elm$html$Html$section,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('hero is-info')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('hero-body')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('container is-fluid')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$h1,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('title')
									]),
								_List_fromArray(
									[
										elm$html$Html$text(string)
									]))
							]))
					]))
			]));
};
var mlu$fragebogengenerator$Upload$showUpload = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				mlu$fragebogengenerator$Upload$showHeroWith('Upload'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('columns has-text-centered')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('column')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('qnButton'),
										elm$html$Html$Events$onClick(mlu$fragebogengenerator$Model$JsonRequested)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Datei auswählen')
									]))
							]))
					]))
			]));
};
var mlu$fragebogengenerator$Main$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lightblue')
			]),
		_List_fromArray(
			[
				mlu$fragebogengenerator$Main$showNavbar,
				model.upload ? mlu$fragebogengenerator$Upload$showUpload(model) : mlu$fragebogengenerator$Edit$showEditQuestionnaire(model)
			]));
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$DateTime = F5(
	function (year, month, day, hour, minute) {
		return {day: day, hour: hour, minute: minute, month: month, year: year};
	});
var NoRedInk$datetimepicker_legacy$DateTimePicker$dateTime = NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$DateTime;
var NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$initialStateValueWithToday = function (today) {
	return {
		activeTimeIndicator: elm$core$Maybe$Just(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$HourIndicator),
		currentAngle: elm$core$Maybe$Nothing,
		date: elm$core$Maybe$Nothing,
		event: '',
		forceClose: false,
		hourPickerStart: 1,
		inputFocused: false,
		minutePickerStart: 0,
		time: A3(NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$TimeSelection, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing),
		titleDate: elm$core$Maybe$Just(
			NoRedInk$datetimepicker_legacy$DateTimePicker$DateTime$toFirstOfMonth(today)),
		today: elm$core$Maybe$Just(today)
	};
};
var NoRedInk$datetimepicker_legacy$DateTimePicker$initialStateWithToday = function (today) {
	return NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$InternalState(
		NoRedInk$datetimepicker_legacy$DateTimePicker$Internal$initialStateValueWithToday(today));
};
var elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return elm$core$Basics$floor(numerator / denominator);
	});
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var elm$time$Time$toAdjustedMinutes = F2(
	function (_n0, time) {
		var defaultOffset = _n0.a;
		var eras = _n0.b;
		return A3(
			elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				elm$time$Time$flooredDiv,
				elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2(elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _n0 = elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_n0) {
			case 1:
				return elm$time$Time$Jan;
			case 2:
				return elm$time$Time$Feb;
			case 3:
				return elm$time$Time$Mar;
			case 4:
				return elm$time$Time$Apr;
			case 5:
				return elm$time$Time$May;
			case 6:
				return elm$time$Time$Jun;
			case 7:
				return elm$time$Time$Jul;
			case 8:
				return elm$time$Time$Aug;
			case 9:
				return elm$time$Time$Sep;
			case 10:
				return elm$time$Time$Oct;
			case 11:
				return elm$time$Time$Nov;
			default:
				return elm$time$Time$Dec;
		}
	});
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$utc = A2(elm$time$Time$Zone, 0, _List_Nil);
var mlu$fragebogengenerator$Answer$initAnswer = {id: 0, text: '', typ: ''};
var mlu$fragebogengenerator$QElement$initQuestion = mlu$fragebogengenerator$QElement$Question(
	{answers: _List_Nil, hint: '', id: 0, questionTime: '', text: 'Beispielfrage', typ: ''});
var mlu$fragebogengenerator$Questionnaire$initQuestionnaire = {conditions: _List_Nil, editTime: '', elements: _List_Nil, newAnswer: mlu$fragebogengenerator$Answer$initAnswer, newAnswerID_Condition: '', newCondition: mlu$fragebogengenerator$Condition$initCondition, newElement: mlu$fragebogengenerator$QElement$initQuestion, title: 'Titel eingeben', viewingTimeBegin: '', viewingTimeEnd: ''};
var mlu$fragebogengenerator$Model$initModel = function (_n0) {
	return _Utils_Tuple2(
		{
			editAnswer: false,
			editQElement: false,
			editQuestionnaire: true,
			inputChildId: -1,
			inputEditTime: '',
			inputParentId: -1,
			inputQuestionTime: '',
			inputTitle: '',
			inputViewingTimeBegin: '',
			inputViewingTimeEnd: '',
			newAnswerID_Condition: '',
			newCondition: mlu$fragebogengenerator$Condition$initCondition,
			questionValidationResult: mlu$fragebogengenerator$Model$NotDone,
			questionnaire: mlu$fragebogengenerator$Questionnaire$initQuestionnaire,
			showEditTimeModal: false,
			showNewAnswerModal: false,
			showNewConditionModal1: false,
			showNewConditionModal2: false,
			showNewNoteModal: false,
			showNewQuestionModal: false,
			showTitleModal: false,
			showViewingTimeModal: false,
			state: NoRedInk$datetimepicker_legacy$DateTimePicker$initialStateWithToday(
				A5(
					NoRedInk$datetimepicker_legacy$DateTimePicker$dateTime,
					1,
					A2(
						elm$time$Time$toMonth,
						elm$time$Time$utc,
						elm$time$Time$millisToPosix(0)),
					1,
					1,
					1)),
			tmp: '',
			upload: false,
			validationResult: mlu$fragebogengenerator$Model$NotDone,
			value: elm$core$Maybe$Nothing
		},
		elm$core$Platform$Cmd$none);
};
var mlu$fragebogengenerator$Main$main = elm$browser$Browser$element(
	{init: mlu$fragebogengenerator$Model$initModel, subscriptions: mlu$fragebogengenerator$Main$subscriptions, update: mlu$fragebogengenerator$Main$update, view: mlu$fragebogengenerator$Main$view});
_Platform_export({'Main':{'init':mlu$fragebogengenerator$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));