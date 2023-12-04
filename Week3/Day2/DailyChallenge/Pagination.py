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
        self.pageSize = pageSize
        self.current_page = 0
        self.last_page = len(self.items) // self.pageSize

    def getVisibleItems(self):
        start = self.current_page*self.pageSize
        end = (self.current_page+1)*self.pageSize if self.current_page < self.last_page else len(self.items)
        return [item for item in self.items[start:end]]
    
    def showPage(self):
        return(f'Page {self.current_page + 1}')

    def prevPage(self):
        if self.current_page != 0:
            self.current_page -= 1
            print(f'Going to {self.showPage()}')
        else:
            raise Exception('Already at the first page')

    def nextPage(self):
        if self.current_page != self.last_page:
            self.current_page += 1
            print(f'Going to {self.showPage()}')
        else:
            raise Exception('Already at the last page')

    def firstPage(self):
        if self.current_page != 0:
            self.current_page = 0
            print(f'Going to {self.showPage()}')
        else:
            raise Exception('Already at the first page')

    def lastPage(self):
        if self.current_page != self.last_page:
            self.current_page = self.last_page
            print(f'Going to {self.showPage()}')
        else:
            raise Exception('Already at the last page')

    def goToPage(self, num):
        if num-1 > self.last_page or num < 1:
            raise Exception('There is no such page!')
        else:
            self.current_page = num-1
            print(f'Going to {self.showPage()}')


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())

p.nextPage()
p.nextPage()
p.prevPage()
p.prevPage()

print(p.getVisibleItems())

p.lastPage()

print(p.getVisibleItems())

p.firstPage()

print(p.getVisibleItems())

p.goToPage(4)

print(p.getVisibleItems())