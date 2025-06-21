from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from typing import List, Optional
import os
import uuid
from datetime import datetime

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB configuration
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "cosmetech_db")

client = MongoClient(MONGO_URL)
db = client[DB_NAME]

# Collections
products_collection = db.products
orders_collection = db.orders
messages_collection = db.messages
news_collection = db.news

# Pydantic models
class Product(BaseModel):
    id: str
    name: str
    name_sango: str
    description: str
    description_sango: str
    price: float
    category: str
    image_url: str
    stock: int = 10
    eco_info: str
    eco_info_sango: str

class CartItem(BaseModel):
    product_id: str
    quantity: int

class Order(BaseModel):
    id: str
    customer_name: str
    customer_phone: str
    customer_email: str
    items: List[CartItem]
    total_amount: float
    payment_method: str
    status: str = "pending"
    created_at: datetime

class Message(BaseModel):
    id: str
    customer_name: str
    customer_email: str
    customer_phone: str
    subject: str
    message: str
    status: str = "unread"
    created_at: datetime

class NewsArticle(BaseModel):
    id: str
    title: str
    title_sango: str
    content: str
    content_sango: str
    image_url: str
    created_at: datetime

# Initialize sample data
@app.on_event("startup")
async def startup_event():
    # Check if products already exist
    if products_collection.count_documents({}) == 0:
        sample_products = [
            {
                "id": str(uuid.uuid4()),
                "name": "Savon Bio au Karité",
                "name_sango": "Savon Karité Bio",
                "description": "Savon naturel enrichi au beurre de karité local, parfait pour tous types de peau",
                "description_sango": "Savon wa karité ya mbeni, mbeni na nzoto ti iri oko",
                "price": 2500,
                "category": "cosmetics",
                "image_url": "https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg",
                "stock": 25,
                "eco_info": "100% naturel, emballage biodégradable",
                "eco_info_sango": "100% natural, emballage wa bio"
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Huile de Coco Pure",
                "name_sango": "Huile Coco Pure",
                "description": "Huile de coco extra vierge pour cheveux et peau, extraite localement",
                "description_sango": "Huile coco na vuko na nzoto, ya local",
                "price": 3500,
                "category": "cosmetics",
                "image_url": "https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg",
                "stock": 15,
                "eco_info": "Extraction artisanale, zéro déchet",
                "eco_info_sango": "Artisanal, zero déchet"
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Sac Tissé Recyclé",
                "name_sango": "Sac Recyclé",
                "description": "Sac artisanal tissé à partir de matériaux recyclés",
                "description_sango": "Sac wa main ti matériau recyclé",
                "price": 4500,
                "category": "recycled",
                "image_url": "https://images.pexels.com/photos/2557040/pexels-photo-2557040.jpeg",
                "stock": 12,
                "eco_info": "Matériaux 100% recyclés, fait main",
                "eco_info_sango": "100% recyclé, fait na main"
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Bijoux en Capsules",
                "name_sango": "Bijoux Capsules",
                "description": "Colliers et bracelets créés à partir de capsules de bouteilles recyclées",
                "description_sango": "Collier na bracelet ti capsule recyclé",
                "price": 1800,
                "category": "recycled",
                "image_url": "https://images.unsplash.com/photo-1566636741346-7bc0510fdaa5",
                "stock": 20,
                "eco_info": "Upcycling créatif, design unique",
                "eco_info_sango": "Upcycling créatif, design unique"
            }
        ]
        products_collection.insert_many(sample_products)
        
    # Add sample news
    if news_collection.count_documents({}) == 0:
        sample_news = [
            {
                "id": str(uuid.uuid4()),
                "title": "Nouvelle Collection Éco-Responsable",
                "title_sango": "Collection Éco-Responsable Kúé",
                "content": "Découvrez notre nouvelle gamme de produits cosmétiques 100% naturels et locaux.",
                "content_sango": "Yeke na collection kúé ti cosmétiques 100% naturel na local.",
                "image_url": "https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg",
                "created_at": datetime.now()
            }
        ]
        news_collection.insert_many(sample_news)

# API Routes
@app.get("/api/products")
async def get_products():
    products = list(products_collection.find({}, {"_id": 0}))
    return products

@app.get("/api/products/{product_id}")
async def get_product(product_id: str):
    product = products_collection.find_one({"id": product_id}, {"_id": 0})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/api/orders")
async def create_order(order_data: dict):
    order_id = str(uuid.uuid4())
    order = {
        "id": order_id,
        "customer_name": order_data["customer_name"],
        "customer_phone": order_data["customer_phone"],
        "customer_email": order_data["customer_email"],
        "items": order_data["items"],
        "total_amount": order_data["total_amount"],
        "payment_method": order_data["payment_method"],
        "status": "pending",
        "created_at": datetime.now()
    }
    orders_collection.insert_one(order)
    return {"message": "Commande créée avec succès", "order_id": order_id}

@app.post("/api/messages")
async def create_message(message_data: dict):
    message_id = str(uuid.uuid4())
    message = {
        "id": message_id,
        "customer_name": message_data["customer_name"],
        "customer_email": message_data["customer_email"],
        "customer_phone": message_data["customer_phone"],
        "subject": message_data["subject"],
        "message": message_data["message"],
        "status": "unread",
        "created_at": datetime.now()
    }
    messages_collection.insert_one(message)
    return {"message": "Message envoyé avec succès", "message_id": message_id}

@app.get("/api/news")
async def get_news():
    news = list(news_collection.find({}, {"_id": 0}).sort("created_at", -1))
    return news

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "company": "Cosmetech Innovations"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)