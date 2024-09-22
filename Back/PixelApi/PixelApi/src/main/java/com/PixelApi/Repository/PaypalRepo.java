package com.PixelApi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PixelApi.Entity.PaypalOrder;

@Repository
public interface PaypalRepo extends JpaRepository<PaypalOrder, String> {

}