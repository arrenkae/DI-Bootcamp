# Daily Challenge : Pagination

# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:

#     items (default: None): It will contain a list of contents to paginate.
#     pageSize (default: 10): The amount of items to show in each page.

# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)


# The Pagination class will have a few methods:

#     getVisibleItems() : returns a list of items visible depending on the pageSize

# So for example we could use this method like this:

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

#     You will have to implement various methods to go through the pages such as:
#         prevPage()
#         nextPage()
#         firstPage()
#         lastPage()
#         goToPage(pageNum)

class Pagination:

    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = int(pageSize)
        self.currentpage = 1
        self.totalpages = -(-len(self.items) // self.pageSize) # rounding up

    def getVisibleItems(self):
        end = self.currentpage*self.pageSize if self.currentpage <= self.totalpages else len(self.items)
        return [item for item in self.items[end-self.pageSize:end]]

    def prevPage(self):
        if self.currentpage > 1:
            self.currentpage -= 1
        else:
            self.currentpage = self.totalpages
        return self

    def nextPage(self):
        if self.currentpage < self.totalpages:
            self.currentpage += 1
        else:
            self.currentpage = 1
        return self

    def firstPage(self):
        self.currentpage = 1
        return self

    def lastPage(self):
        self.currentpage = self.totalpages
        return self

    def goToPage(self, num):
        if num > self.totalpages:
            self.currentpage = self.totalpages
        elif num < 1:
            self.currentpage = 1
        else:
            self.currentpage = num
        return self

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())

p.nextPage()
p.nextPage()
p.prevPage()
p.nextPage()

print(p.getVisibleItems())

p.lastPage()

print(p.getVisibleItems())

p.firstPage()

print(p.getVisibleItems())

p.goToPage(5)

print(p.getVisibleItems())

p.nextPage().nextPage()

print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())

p.prevPage()

print(p.getVisibleItems())

