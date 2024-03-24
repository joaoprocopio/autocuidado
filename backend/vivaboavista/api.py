from core.views import router as core_router
from ninja import NinjaAPI

api = NinjaAPI(
    title="vivaboavista",
)


api.add_router("core/", core_router)
