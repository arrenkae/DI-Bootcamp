my_function = lambda s: s.upper()

fruits = ['apple', 'banana', 'pear', 'apricot', 'orange']

map_result = map(lambda s: s.upper(), fruits)

print(dict(zip(map_result, fruits)))

filter_obj = filter(lambda s: s[0] == 'A', fruits)
print(list(filter_obj))

nums_list = [1,2,5,8,7,9,10]

def add(n1,n2):
    result = n1 + n2

reduced = reduce(lambda n1, n2: n1+n2, nums_list)
print(sum(nums))