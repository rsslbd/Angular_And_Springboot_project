package com.jwt.secqurity.subCatagory.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@MappedSuperclass
@Getter
@Setter
public abstract class SubCatagoryBaseModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sub_catagory_id;

    private Boolean active;

    //    @CreatedDate
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    private Integer createdBy;

    //    @LastModifiedDate
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private Integer updatedBy;

    @PrePersist
    public void prePersist() {
//        this.createdAt = LocalDateTime.now();
        this.active = true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SubCatagoryBaseModel baseModel = (SubCatagoryBaseModel) o;
        return Objects.equals(sub_catagory_id, baseModel.sub_catagory_id) && Objects.equals(active, baseModel.active) && Objects.equals(createdAt, baseModel.createdAt) && Objects.equals(createdBy, baseModel.createdBy) && Objects.equals(updatedAt, baseModel.updatedAt) && Objects.equals(updatedBy, baseModel.updatedBy);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sub_catagory_id, active, createdAt, createdBy, updatedAt, updatedBy);
    }
}

