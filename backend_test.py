import requests
import json
import unittest
from datetime import datetime

class CosmetechAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(CosmetechAPITester, self).__init__(*args, **kwargs)
        self.base_url = "https://52a50568-d9da-46de-b3a6-95279ca5b2f9.preview.emergentagent.com"
        self.products = []
        
    def test_01_health_check(self):
        """Test the health check endpoint"""
        print("\n🔍 Testing health check endpoint...")
        response = requests.get(f"{self.base_url}/api/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
        self.assertEqual(data["company"], "Cosmetech Innovations")
        print("✅ Health check endpoint is working")
        
    def test_02_get_products(self):
        """Test the products endpoint"""
        print("\n🔍 Testing products endpoint...")
        response = requests.get(f"{self.base_url}/api/products")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        self.assertGreater(len(data), 0)
        self.products = data  # Save for later tests
        print(f"✅ Products endpoint returned {len(data)} products")
        
        # Verify product structure
        product = data[0]
        required_fields = ["id", "name", "name_sango", "description", "description_sango", 
                          "price", "category", "image_url", "stock", "eco_info", "eco_info_sango"]
        for field in required_fields:
            self.assertIn(field, product)
        print("✅ Product structure is valid")
        
    def test_03_get_product_by_id(self):
        """Test getting a single product by ID"""
        if not self.products:
            self.test_02_get_products()
            
        product_id = self.products[0]["id"]
        print(f"\n🔍 Testing get product by ID endpoint for product {product_id}...")
        response = requests.get(f"{self.base_url}/api/products/{product_id}")
        self.assertEqual(response.status_code, 200)
        product = response.json()
        self.assertEqual(product["id"], product_id)
        print("✅ Get product by ID endpoint is working")
        
    def test_04_get_news(self):
        """Test the news endpoint"""
        print("\n🔍 Testing news endpoint...")
        response = requests.get(f"{self.base_url}/api/news")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        print(f"✅ News endpoint returned {len(data)} articles")
        
        if len(data) > 0:
            # Verify news article structure
            article = data[0]
            required_fields = ["id", "title", "title_sango", "content", "content_sango", "image_url", "created_at"]
            for field in required_fields:
                self.assertIn(field, article)
            print("✅ News article structure is valid")
        
    def test_05_create_message(self):
        """Test creating a message"""
        print("\n🔍 Testing message creation endpoint...")
        message_data = {
            "customer_name": "Test User",
            "customer_email": "test@example.com",
            "customer_phone": "0123456789",
            "subject": "Test Message",
            "message": "This is a test message from the API test script."
        }
        
        response = requests.post(
            f"{self.base_url}/api/messages",
            json=message_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("message", data)
        self.assertIn("message_id", data)
        print("✅ Message creation endpoint is working")
        
    def test_06_create_order(self):
        """Test creating an order"""
        if not self.products:
            self.test_02_get_products()
            
        print("\n🔍 Testing order creation endpoint...")
        order_data = {
            "customer_name": "Test Customer",
            "customer_phone": "0123456789",
            "customer_email": "test@example.com",
            "items": [
                {
                    "product_id": self.products[0]["id"],
                    "quantity": 2
                }
            ],
            "total_amount": self.products[0]["price"] * 2,
            "payment_method": "orange_money"
        }
        
        response = requests.post(
            f"{self.base_url}/api/orders",
            json=order_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("message", data)
        self.assertIn("order_id", data)
        print("✅ Order creation endpoint is working")
        
    def test_07_payment_initiate(self):
        """Test payment initiation endpoint"""
        if not self.products:
            self.test_02_get_products()
            
        print("\n🔍 Testing payment initiation endpoint...")
        payment_data = {
            "amount": self.products[0]["price"] * 2,
            "phone": "0123456789",
            "provider": "orange_money",
            "customer_name": "Test Customer",
            "customer_email": "test@example.com",
            "order_items": [
                {
                    "product_id": self.products[0]["id"],
                    "name": self.products[0]["name"],
                    "quantity": 2,
                    "price": self.products[0]["price"]
                }
            ]
        }
        
        response = requests.post(
            f"{self.base_url}/api/payment/initiate",
            json=payment_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data["success"])
        self.assertIn("payment_ref", data)
        self.assertIn("message", data)
        self.assertEqual(data["next_step"], "confirm_payment")
        
        # Save payment reference for next test
        self.payment_ref = data["payment_ref"]
        print("✅ Payment initiation endpoint is working")
        
    def test_08_payment_confirm(self):
        """Test payment confirmation endpoint"""
        # Skip if payment_ref is not available
        if not hasattr(self, 'payment_ref'):
            self.test_07_payment_initiate()
            
        print("\n🔍 Testing payment confirmation endpoint...")
        confirmation_data = {
            "payment_ref": self.payment_ref,
            "amount": self.products[0]["price"] * 2,
            "phone": "0123456789",
            "provider": "orange_money",
            "customer_name": "Test Customer",
            "customer_email": "test@example.com",
            "order_items": [
                {
                    "product_id": self.products[0]["id"],
                    "name": self.products[0]["name"],
                    "quantity": 2,
                    "price": self.products[0]["price"]
                }
            ]
        }
        
        response = requests.post(
            f"{self.base_url}/api/payment/confirm",
            json=confirmation_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        
        # Note: The payment confirmation has a 90% success rate by design
        # So we can't assert success, but we can check the structure
        self.assertIn("success", data)
        self.assertIn("status", data)
        self.assertIn("message", data)
        
        if data["success"]:
            self.assertEqual(data["status"], "confirmed")
            self.assertIn("order_id", data)
            self.assertIn("transaction_id", data)
            print("✅ Payment confirmation succeeded")
        else:
            self.assertEqual(data["status"], "failed")
            self.assertIn("error_code", data)
            print("ℹ️ Payment confirmation failed (expected in 10% of cases)")
        
        print("✅ Payment confirmation endpoint is working")
        
    def test_09_payment_status(self):
        """Test payment status endpoint"""
        # Skip if payment_ref is not available
        if not hasattr(self, 'payment_ref'):
            self.test_07_payment_initiate()
            
        print("\n🔍 Testing payment status endpoint...")
        response = requests.get(
            f"{self.base_url}/api/payment/status/{self.payment_ref}"
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["payment_ref"], self.payment_ref)
        self.assertIn("status", data)
        self.assertIn("message", data)
        print("✅ Payment status endpoint is working")
        
    def run_all_tests(self):
        """Run all tests and print a summary"""
        test_methods = [method for method in dir(self) if method.startswith('test_')]
        test_methods.sort()  # Ensure tests run in order
        
        total_tests = len(test_methods)
        passed_tests = 0
        
        print("\n🧪 Starting Cosmetech API Tests 🧪")
        print("=" * 50)
        
        for method in test_methods:
            try:
                getattr(self, method)()
                passed_tests += 1
            except Exception as e:
                print(f"❌ {method} failed: {str(e)}")
                
        print("\n" + "=" * 50)
        print(f"📊 Test Summary: {passed_tests}/{total_tests} tests passed")
        
        return passed_tests == total_tests

if __name__ == "__main__":
    tester = CosmetechAPITester()
    success = tester.run_all_tests()
    exit(0 if success else 1)