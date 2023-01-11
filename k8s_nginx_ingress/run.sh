#!/bin/bash
minikube kubectl apply -- -f deployment.yaml
minikube kubectl apply -- -f service.yaml
minikube kubectl apply -- -f ingress.yaml
