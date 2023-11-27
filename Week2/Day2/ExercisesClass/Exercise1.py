list1 = [5, 10, 15, 20, 25, 50, 20]

if 20 in list1:
    index_20 = list1.index(20)
    list1.pop(index_20)
    list1.insert(index_20, 200)

print(list1)