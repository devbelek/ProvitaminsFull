from rest_framework import pagination


class DefaultPagination(pagination.LimitOffsetPagination):
    default_limit = 10
